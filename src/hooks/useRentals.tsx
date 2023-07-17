'use client'

import { Car } from "@/@types/Car";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { useCars } from "./useCars";

interface RentalsProviderProps {
  children: ReactNode;
}

interface Rental {
  car: Car,
  expectedReturnDate: Date,
}

interface RentalsContextData {
  rentals: Rental[];
  setRentals: Dispatch<SetStateAction<Rental[]>>
  createRental: (car: Car, expectedReturnDate: Date) => void;
  finishRental: (carId: number, expectedReturnDate: Date) => void;
}

const RentalsContext = createContext<RentalsContextData>(
  {} as RentalsContextData
);

export function RentalsProvider({ children }: RentalsProviderProps) {
  const [rentals, setRentals] = useState([] as Rental[]);

  const { cars, likedCars, setLikedCars, setCars } = useCars();

  function createRental(car: Car, expectedReturnDate: Date) {
    const carsUpdated = [...cars];
    const findIndex = carsUpdated.findIndex(findCar => findCar.id === car.id);

    carsUpdated[findIndex].available = false;
    setCars(carsUpdated);

    // Saving data to local storage
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

    const carsUpdated = [...cars];
    const findIndex = carsUpdated.findIndex(findCar => findCar.id === carId);

    carsUpdated[findIndex].available = true;
    setCars(carsUpdated);

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

    const likedCars = JSON.parse(
      localStorage.getItem('likedCars') as string
    );

    if (likedCars) {
      setLikedCars(likedCars);
    }
  }, []);

  useEffect(() => {
    if (rentals.length > 0) {
      const rentalsUpdated = [...rentals];
      rentalsUpdated.forEach((rental, i) => {
        const findIndex = likedCars.findIndex(findCar => findCar.id === rental.car.id);

        if (findIndex >= 0) {
          rentalsUpdated[i].car = likedCars[findIndex];
        }
      });

      setRentals(rentalsUpdated);
    }
  }, [likedCars]);

  return (
    <RentalsContext.Provider value={{ rentals, createRental, finishRental, setRentals }}>
      {children}
    </RentalsContext.Provider>
  )
}

export function useRentals() {
  const context = useContext(RentalsContext);

  return context;
}
