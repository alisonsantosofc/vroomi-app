'use client'

import { X } from "@phosphor-icons/react";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import ReactModal from "react-modal";

interface ModalProviderProps {
  children: ReactNode;
}

interface ModalContextData {
  setModalContent: Dispatch<SetStateAction<ReactNode>>;
}

const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData
);

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  function onRequestClose() {
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ setModalContent }}>
      {children}
      <ReactModal
        isOpen={modalContent ? true : false}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        ariaHideApp={false}
      >
        <X className="btn-close" weight="bold" onClick={() => onRequestClose()} />
        {modalContent}
      </ReactModal>
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext);

  return context;
}
