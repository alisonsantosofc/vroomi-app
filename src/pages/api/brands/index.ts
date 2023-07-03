// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { Brand } from '@/@types/Brand';

import importedBrands from "./brands.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  function addId(brands: Omit<Brand, "id">[]) {
    return brands.map((brand, i) => {
      return { id: i + 1, ...brand };
    });
  }
  
  if (req.method === 'GET') {
    const { name } = req.query;

    let brands = addId(importedBrands);

    if (name) {
      brands = brands.filter((brand) => name === brand.name);
    }

    res.status(200).json({ brands });
  } else {
    // Caso a requisição não seja GET, retorne um erro
    res.status(405).json({ message: 'Método não permitido' });
  }
}
