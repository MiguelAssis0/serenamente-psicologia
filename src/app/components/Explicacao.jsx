"use client";
import styles from "../page.module.css";
import relationship from "../assets/relationship.png";
import knowledge from "../assets/autoconhecimento.png";
import emotions from "../assets/emotions.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Explicacao() {
  const [motivos, setMotivos] = useState([]);

  useEffect(() => {
    // Inicializa o AOS
    if (typeof window !== "undefined") {
      Aos.init({
        duration: 2000,
        once: true,
      });
    }

    const mtvs = [
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

    setMotivos(mtvs);
  }, []);

  return (
    <div className={styles.explicacao} id="Depoimentos">
      <h2 data-aos="fade-up">Por que passar no psicólogo?</h2>
      <div className={styles.cards}>
        {motivos.map((motivo) => (
          <div 
            key={motivo.id} 
            className={styles.card} 
            data-aos="zoom-in" // Animação ao entrar na tela
          >
            <div className={styles.image}>
              <Image src={motivo.imagem} alt={motivo.descricao} />
            </div>
            <div className={styles.title}>
              <h3>{motivo.nome}</h3>
            </div>
            <div className={styles.text}>
              <p>{motivo.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
