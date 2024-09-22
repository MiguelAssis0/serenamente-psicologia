"use client";

import styles from "../page.module.css";
import { useEffect } from "react";
import Aos from "aos";
import dynamic from "next/dynamic";
import "aos/dist/aos.css";

export default function Footer() {

  const DynamicMap = dynamic(() => import('./Map'), { ssr: false });

  useEffect(() => {
    // Inicializa o AOS
    if (typeof window !== "undefined") {
      Aos.init({
        duration: 2000,
        once: true,
      });
    }
  }, []);

  return (
    <footer className={styles.footer} id="Contato">
      <section className={styles.footer__front} data-aos="fade-up">
        <article className={styles.contact} data-aos="fade-up">
          <form>
            <div>
              <label htmlFor="name">Nome:</label>
              <input type="text" name="name" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="message">Mensagem:</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </article>
        <article className={styles.local} data-aos="fade-up">
          <DynamicMap />
        </article>
      </section>
      <section className={styles.footer__copyright} >
        <p>Copyright &copy; 2024. Todos os direitos reservados.</p>
      </section>
    </footer>
  );
}
