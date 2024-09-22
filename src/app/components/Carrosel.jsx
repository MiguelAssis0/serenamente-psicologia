"use client";
import { useState, useEffect } from "react";
import styles from "../page.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [avaliacoes, setAvaliacoes] = useState([]);

  useEffect(() => {
    // Inicializa o AOS
    if (typeof window !== "undefined") {
      Aos.init({
        duration: 2000,
        once: true,
      });
    }

    const avaliations = [
      {
        id: 1,
        nome: "Maria Clara",
        avaliacao: "Excelente. Atendeu a todos os meus problemas. Obrigado!",
      },
      {
        id: 2,
        nome: "Ana",
        avaliacao: "Obrigada por me ajudar a lidar com meus problemas!",
      },
      {
        id: 3,
        nome: "Joaquim",
        avaliacao: "Sem você, eu não conseguiria superar meus problemas.",
      },
    ];

    setAvaliacoes(avaliations);
  }, []);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === avaliacoes.length - 1 ? 0 : prevIndex + 1
      );
    };

    const interval = setInterval(nextSlide, 3000);
    
    return () => clearInterval(interval);
  }, [avaliacoes.length]);

  return (
    <div className={styles.Avaliacoes}>
      <h2 data-aos="fade-up">Depoimentos</h2>
      <div className="carousel">
        <div
          className={styles["carousel-container"]}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {avaliacoes.map((avaliacao) => (
            <div
              key={avaliacao.id}
              className={styles["carousel-slide"]}
              data-aos="zoom-in" // Animação ao entrar na tela
            >
              <p>&#34; {avaliacao.avaliacao} &#34;</p>
              <h3>- {avaliacao.nome}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
