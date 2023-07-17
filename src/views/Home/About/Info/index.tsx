import { Headset, Medal, ShieldCheck } from "@phosphor-icons/react";

export function AboutInfo() {
  return (
    <div className="info-container grid">
      <div className="about-box">
        <ShieldCheck />
        <div>
          <h3>Seguro</h3>
          <p>disponível á todo <span>momento</span></p>
        </div>
      </div>

      <div className="about-box">
        <Headset />
        <div>
          <h3>Suporte</h3>
          <p>online <span>24h </span>todos os dias</p>
        </div>
      </div>
    </div>
  )
}
