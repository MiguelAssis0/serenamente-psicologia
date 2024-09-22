"use client";
import styles from "./page.module.css";
import Carrossel from "./components/Carrosel";
import Ajuda from "./components/Ajuda";
import Explicacao from "./components/Explicacao";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css"; 

import Header from "./components/Header";
import Footer from "./components/Footer";


export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 2000, 
      once: true, 
    });
  }, []); 

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.Home}>
          <div className={styles.Home__agenda} data-aos="fade-right">
            <h2>Agende agora sua consulta!</h2>
            <p>O melhor para sua saúde mental</p>
            <button>Agendar</button>
          </div>
          <div className={styles.Home__image}></div>
        </div>
        <div className={styles.Sobre} data-aos="fade-up" id="Sobre">
          <div className={styles.Sobre__image} data-aos="fade-up"></div>
          <div className={styles.Sobre__text} data-aos="fade-up">
            <h2>Sobre</h2>
            <p>
              Sou Ana, psicóloga formada pela USP e especialista em Terapia
              Cognitivo-Comportamental. Com anos de experiência ajudando pessoas a
              superarem desafios emocionais e comportamentais, acredito que cada
              indivíduo é único e merece uma abordagem personalizada.
            </p>
            <p>
              Minha missão é oferecer um espaço seguro e acolhedor, onde você
              possa explorar suas emoções, entender melhor a si mesmo e encontrar
              caminhos para uma vida mais equilibrada e satisfatória. Atendo
              adolescentes, adultos e casais, sempre buscando promover o
              autoconhecimento e o bem-estar emocional.
            </p>
            <p>
              Estou aqui para te apoiar em sua jornada de crescimento pessoal e
              autodescoberta. Juntos, podemos trabalhar para construir uma vida
              mais saudável, feliz e plena.
            </p>
          </div>
        </div>
      
        <Ajuda />
        <Carrossel />
        <Explicacao />
      </main>
      <Footer />
    </>
  );
}
