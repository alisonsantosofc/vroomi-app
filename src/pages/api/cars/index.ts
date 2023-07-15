// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import importedCars from "./cars.json";
import { Car } from '@/@types/Car';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  function addId(cars: Omit<Car, "id" | "available">[]) {
    return cars.map((car, i) => {
      return { 
        ...car, 
        id: i + 1,
        available: true,
      };
    });
  }
  
  if (req.method === 'GET') {
    const { maxDuration, maxDistance } = req.query;

    let cars = addId(importedCars);

    if (maxDuration) {
      cars = cars.filter((car) => Number(maxDuration) <= car.availability.maxDuration);
    }

    if (maxDistance) {
      cars = cars.filter((car) => Number(maxDistance) <= car.availability.maxDistance);
    }

    res.status(200).json({ cars });
  } else {
    // Caso a requisição não seja GET, retorne um erro
    res.status(405).json({ message: 'Método não permitido' });
  }
}
