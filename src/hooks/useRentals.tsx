import { Car } from "@/@types/Car";
import { createContext, ReactNode, useContext, useState } from "react";

interface RentalsProviderProps {
  children: ReactNode;
}

interface Rental {
  carId: number, 
  carModel: string,
  carBrand: string,
  expectedReturnDate: Date,
}

interface RentalsContextData {
  rentals: Rental[],
  createRental: (car: Car, expectedReturnDate: Date) => void;
}

const RentalsContext = createContext<RentalsContextData>(
  {} as RentalsContextData
);

export function RentalsProvider({ children }: RentalsProviderProps) {
  const [rentals, setRentals] = useState([] as Rental[]);

  function createRental(car: Car, expectedReturnDate: Date) {
    setRentals([...rentals, {
      carId: car.id,
      carModel: car.model,
      carBrand: car.brand,
      expectedReturnDate,
    }]);
  }

  return (
    <RentalsContext.Provider value={{ rentals, createRental }}>
      {children}
    </RentalsContext.Provider>
  )
}

export function useRentals() {
  const context = useContext(RentalsContext);

  return context;
}
