import React from "react";
import styles from "./about.module.css";

export default function AboutSection() {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.aboutSection}>
        <h2>Descrição da vaga</h2>
        <p>
          Atender chamados abertos pelos clientes via aplicação, contato
          telefônico, e-mail, on demand, remoto, etc, solucinando os problemas
          apresentados pelo cliente; Garantir o melhor atendimento visando a
          jornada e a experiência do cliente, nutrindo a confiabilidade; Levantar
          feedbacks dos clientes, observando erros recorrentes para antecipar e
          evitar novos chamados, por motivos semelhantes; Solucionar efetivamente
          os problemas demandados, usando de teste e conhecimento do ambiente do
          cliente para tratativa acessível a cada público;
        </p>
      </div>
    </div>
  );
}
