import { useEffect, useState } from "react";
import Image from "next/image";

import { Brand } from "@/@types/Brand";

import { StyledFleet } from "./styles";
import { toast } from "react-toastify";
import { Toast } from "@/components/Toast";

export function Fleet() {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    async function getBrands() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        const response = await (await fetch(`${apiUrl}/brands?`)).json();

        setBrands(response.brands);
      } catch (err) {
        toast.error(
          <Toast
            type="error"
            title="Erro no Servidor"
            message="Não foi possível conectar o dispositivo ao servidor, por favor tente novamente mais tarde."
          />
        );
      }
    }

    getBrands();
  }, []);

  return (
    <StyledFleet className="section" id="fleet">
      <h2 className="section-title">Frota de veículos</h2>
      <span className="section-subtitle">Trabalhamos com as melhores marcas</span>

      <div className="fleet-container container grid">
        {brands.map(brand => (
          <div className="brand-card" key={brand.id}>
            <Image
              src={require(`../../../public/brands/${brand.slug}.svg`)}
              alt={brand.slug}
              width={300}
              height={150}
            />
          </div>
        ))}
      </div>
    </StyledFleet>
  )
}
