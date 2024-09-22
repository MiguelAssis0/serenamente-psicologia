"use client";
import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import whatsapp from "../assets/whatsapp.png";
import phone from "../assets/phone.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Header() {
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
    <div className={styles.header__container} >
      <div className={styles.header__contact} >
        <div className={styles.header__phone}>
          <ul>
            <li aria-label="Telefone">
              <Image src={phone} alt="Telefone" /> +55 (11) 99999-9999
            </li>
            <li aria-label="WhatsApp">
              <Image src={whatsapp} alt="WhatsApp" /> +55 (11) 99999-9999
            </li>
          </ul>
        </div>
        <div className={styles.header__email} data-aos="fade-up">
          <ul>
            <li aria-label="Email">contato@serenamente.com</li>
          </ul>
        </div>
      </div>
      <header className={styles.header}>
        <div className={styles.header__content}>
          <Image src={logo} alt="Logo da Serenamente" />
        </div>
        <nav>
          <ul>
            <li><Link href="/#Home">Home</Link></li>
            <li><Link href="/#Sobre">Sobre</Link></li>
            <li><Link href="/#Depoimentos">Depoimentos</Link></li>
            <li><Link href="/#Contato">Contato</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
