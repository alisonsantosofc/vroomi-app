// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import importedCars from "./cars.json";
import { Car } from '@/views/Rent';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  function addId(cars: Omit<Car, "id">[]) {
    return cars.map((car, i) => {
      return { id: i + 1, ...car };
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

    setTimeout(() => {
      res.status(200).json({ cars });
    }, 2000);
  } else {
    // Caso a requisição não seja GET, retorne um erro
    res.status(405).json({ message: 'Método não permitido' });
  }
}
