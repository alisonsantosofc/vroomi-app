import { Input } from "@/components/Input";

import { StyledFleet } from "./styles";
import { Textarea } from "@/components/Textarea";
import { Button } from "@/components/Button";
import { CaretRight, EnvelopeSimple, Gear, HandHeart, PaperPlaneTilt, WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

export function Support() {
  return (
    <StyledFleet className="section" id="support">
      <h2 className="section-title">Suporte 24h</h2>
      <span className="section-subtitle">Nossa equipe sempre disponível</span>

      <div className="support-container container">
        <form>
          <div className="user-data">
            <Input placeholder="Nome" />
            <Input placeholder="Email" />
          </div>

          <Textarea 
            cols={8}
            rows={6}
            placeholder="Descreva em algumas palavras como podemos ajudar você" 
          />
        </form>

        <div className="btn-container">
          <Button typed="transparent" icon={<Gear />}>
            <Link href={"/support"}>Tentar resolver agora</Link>
          </Button>
          <Button icon={<PaperPlaneTilt />}>Solicitar suporte</Button>
        </div>

        <div className="contact-container">
            <h2>Outros meios de contato</h2>

            <div className="contact-cards">
              <div className="contact-card">
                <WhatsappLogo />

                <h3>Whatsapp</h3>
                <span>{'(81) 98342-3876'}</span>

                <a 
                  href="https://wa.me/5581983423876" 
                  className="contact-button"
                  target="_blank" rel="noreferrer"
                >
                  Falar no whatsapp
                  <CaretRight weight="bold"/>
                </a>
              </div>

              <div className="contact-card">
                <EnvelopeSimple />

                <h3>Email</h3>
                <span>vroomi.help@gmail.com</span>

                <a 
                  href="mailto:alisonsantoso22@gmail.com" 
                  className="contact-button"
                  target="_blank" rel="noreferrer"
                >
                  Escrever um email
                  <CaretRight weight="bold"/>
                </a>
              </div>
            </div>
        </div>
      </div>
    </StyledFleet>
  )
}
