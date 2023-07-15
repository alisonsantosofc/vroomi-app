import { ReactNode } from 'react'
import { StyledPopover } from './styles'
import { X } from '@phosphor-icons/react';

interface PopoverProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  align?: 'left' | 'right' | 'center';
}

export function Popover({ children, title, isOpen, onClose, align }:PopoverProps) {
  return (
    <StyledPopover hasTitle={title ? true : false} className={`${isOpen ? 'show' : ''}`}>
      <div className="arrow-container">
        <span className="arrow"></span>
      </div>
      <X className="btn-close" onClick={() => onClose()} />

      <h5>{title}</h5>

      <div className="popover-content">
        {children}
      </div>
    </StyledPopover>
  )
}