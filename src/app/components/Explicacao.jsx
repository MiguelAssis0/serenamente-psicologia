"use client";
import styles from "../page.module.css";
import relationship from "../assets/relationship.png";
import knowledge from "../assets/autoconhecimento.png";
import emotions from "../assets/emotions.png";

import Image from "next/image";

import Aos from "aos";
import { useEffect } from "react";

export default function Explicacao() {

  useEffect(() => {
    Aos.init({
      duration: 2000, 
      once: true 
    });
  }, []);

  const motivos = [
    {
      id: 1,
      nome: "Descubra a Si Mesmo",
      imagem: knowledge,
      descricao:
        "O psicólogo ajuda a explorar suas emoções, pensamentos e comportamentos, promovendo um profundo autoconhecimento. Entender quem você é é o primeiro passo para o crescimento pessoal.",
    },

    {
      id: 2,
      nome: "Aprenda a Lidar com Suas Emoções",
      imagem: emotions,
      descricao:
        "A terapia oferece ferramentas para identificar, compreender e gerenciar suas emoções, como ansiedade, tristeza e raiva, proporcionando uma vida mais equilibrada e saudável.",
    },

    {
      id: 3,
      nome: "Melhore Seus Relacionamentos",
      imagem: relationship,
      descricao:
        "Com o apoio de um psicólogo, você pode aprimorar suas habilidades de comunicação e resolver conflitos, construindo relacionamentos mais saudáveis e satisfatórios.",
    },
  ];

  return (
    <div className={styles.explicacao} data-aos="fade-up" id="Depoimentos">
      <h2 data-aos="fade-up">Por que passar no psicólogo? </h2>
      <div className={styles.cards} data-aos="fade-up">
          {motivos.map((motivo) => (
            <div key={motivo.id} className={styles.card}>
              <div className={styles.image}>
                  <Image src={motivo.imagem} alt={motivo.descricao} data-aos="fade-up" />
              </div>
              <div className={styles.title}>
                  <h3 data-aos="fade-up">{motivo.nome}</h3>
              </div>
              <div className={styles.text}>
                  <p data-aos="fade-up">{motivo.descricao}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
