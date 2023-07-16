'use client'

import { Car } from "@/@types/Car";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface RentalsProviderProps {
  children: ReactNode;
}

interface Rental {
  car: Car,
  expectedReturnDate: Date,
}

interface RentalsContextData {
  rentals: Rental[];
  createRental: (car: Car, expectedReturnDate: Date) => void;
  finishRental: (carId: number, expectedReturnDate: Date) => void;
}

const RentalsContext = createContext<RentalsContextData>(
  {} as RentalsContextData
);

export function RentalsProvider({ children }: RentalsProviderProps) {
  const [rentals, setRentals] = useState([] as Rental[]);

  function createRental(car: Car, expectedReturnDate: Date) {
    // Saving data to local stoge
    localStorage.setItem(
      'rentals',
      JSON.stringify([...rentals, {
        car: car,
        expectedReturnDate,
      }])
    );

    setRentals([...rentals, {
      car: car,
      expectedReturnDate,
    }]);
  }

  function finishRental(carId: number, expectedReturnDate: Date) {
    const rentalsUpdated = rentals.filter(rental => rental.car.id !== carId) 

    // Saving data to local stoge
    localStorage.setItem(
      'rentals',
      JSON.stringify(rentalsUpdated)
    );

    setRentals(rentalsUpdated);
  }

  useEffect(() => {
    const rentals = JSON.parse(
      localStorage.getItem('rentals') as string
    );

    if (rentals) {
      setRentals(rentals);
    }
  }, []);

  return (
    <RentalsContext.Provider value={{ rentals, createRental, finishRental }}>
      {children}
    </RentalsContext.Provider>
  )
}

export function useRentals() {
  const context = useContext(RentalsContext);

  return context;
}
