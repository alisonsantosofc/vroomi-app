'use client'

import { Car } from "@/@types/Car";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

interface CarsProviderProps {
  children: ReactNode;
}

interface CarsContextData {
  cars: Car[];
  likedCars: Car[];
  setCars: Dispatch<SetStateAction<Car[]>>;
  handleSetCars: (responseCars: Car[]) => void;
  handleLikedCar: (car: Car, rentals: any[], setRentals: any) => void;
  setLikedCars: Dispatch<SetStateAction<Car[]>>;
}

const CarsContext = createContext<CarsContextData>(
  {} as CarsContextData
);

export function CarsProvider({ children }: CarsProviderProps) {
  const [cars, setCars] = useState([] as Car[]);
  const [likedCars, setLikedCars] = useState([] as Car[]);

  function handleSetCars(responseCars: Car[]) {
    const carsUpdated = [...responseCars];

    if (likedCars.length > 0) {
      likedCars.forEach(car => {
        const findIndex = carsUpdated.findIndex(findCar => findCar.id === car.id);

        if (findIndex >= 0) {
          carsUpdated[findIndex].like = car.like; 
        }
      });

      setCars(carsUpdated);
    } else {
      setCars(responseCars);
    }
  }

  function handleLikedCar(car: Car, rentals: any[], setRentals: any) {
    const carsFindIndex = cars.findIndex(findCar => findCar.id === car.id);

    const carsUpdated = [...cars];

    carsUpdated[carsFindIndex].like = !car.like;

    setCars(carsUpdated);

    const alreadyLiked = likedCars.filter(carFilter => carFilter.id === car.id);

    let likedCarsUpdated = [...likedCars];

    if (alreadyLiked?.length > 0) {
      likedCarsUpdated = likedCars.filter(carFilter => carFilter.id !== car.id);
    } else {
      likedCarsUpdated.push(carsUpdated[carsFindIndex]);
    }

    setLikedCars(likedCarsUpdated);

    // Saving data to local stoge
    localStorage.setItem(
      'likedCars',
      JSON.stringify(likedCarsUpdated)
    );
  }

  useEffect(() => {
    const likedCars = JSON.parse(
      localStorage.getItem('likedCars') as string
    );

    if (likedCars) {
      setLikedCars(likedCars);
    }

    const cars = JSON.parse(
      localStorage.getItem('cars') as string
    );

    if (cars) {
      setCars(cars);
    }
  }, []);

  useEffect(() => {
    // Saving data to local stoge
    localStorage.setItem(
      'cars',
      JSON.stringify(cars)
    );
  }, [cars])

  return (
    <CarsContext.Provider value={{ cars, likedCars, handleLikedCar, handleSetCars, setCars, setLikedCars }}>
      {children}
    </CarsContext.Provider>
  )
}

export function useCars() {
  const context = useContext(CarsContext);

  return context;
}
