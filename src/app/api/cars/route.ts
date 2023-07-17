import { NextResponse } from 'next/server';

import importedCars from "./cars.json";
import { Car } from '@/@types/Car';

function addId(cars: Omit<Car, "id" | "available" | "like">[]) {
  return cars.map((car, i) => {
    return { 
      ...car, 
      id: i + 1,
      available: true,
      like: false,
    };
  });
}
 
export async function GET(req: Request) {
   // get req params
   const { searchParams } = new URL(req.url)
   const maxDuration = searchParams.get('maxDuration');
   const maxDistance = searchParams.get('maxDistance');
 
   let cars = addId(importedCars);
 
   if (maxDuration) {
     cars = cars.filter((car) => Number(maxDuration) <= car.availability.maxDuration);
   }
 
   if (maxDistance) {
     cars = cars.filter((car) => Number(maxDistance) <= car.availability.maxDistance);
   }
 
  return NextResponse.json({ cars })
}