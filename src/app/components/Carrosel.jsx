"use client";
import { useState, useEffect } from "react";
import styles from "../page.module.css";
import Aos from "aos";
import "aos/dist/aos.css"; 

export default function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const avaliacoes = [
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === avaliacoes.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    Aos.init({
      duration: 2000, 
      once: true 
    });

    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.Avaliacoes}>
      <h2 data-aos="fade-right">Depoimentos</h2>
      <div className="carousel">
        <div
          className={styles["carousel-container"]}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          data-aos="fade-in"
        >
          {avaliacoes.map((avaliacao, index) => (
            <div
              key={index}
              className={styles["carousel-slide"]}
              data-aos="fade-in" 
            >
              <p data-aos="fade-up">&#34; {avaliacao.avaliacao} &#34;</p>
              <h3 data-aos="fade-up">- {avaliacao.nome}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
