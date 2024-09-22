"use client";
import styles from "../page.module.css";
import Link from "next/link";

import Image from "next/image";
import logo from "../assets/logo.png";
import whatsapp from "../assets/whatsapp.png";
import phone from "../assets/phone.png";


export default function Header() {


    return (
        <div className={styles.header__container}>
            <div className={styles.header__contact}>
                <div className={styles.header__phone}>
                    <ul>
                        <li><Image src={phone} alt="phone" /> +55 (11) 99999-9999</li>
                        <li><Image src={whatsapp} alt="whatsapp" /> +55 (11) 99999-9999</li>
                    </ul>
                </div>
                <div className={styles.header__email}>
                    <ul>
                        <li>contato@serenamente.com</li>
                    </ul>
                </div>
            </div>
        <header className={styles.header}>
            <div className={styles.header__content}>
                <Image src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><Link href="/#Home">Home </Link></li>
                    <li><Link href="/#Sobre">Sobre </Link></li>
                    <li><Link href="/#Depoimentos">Depoimentos </Link></li>
                    <li><Link href="/#Contato">Contato </Link></li>
                </ul>
            </nav>
        </header>
        </div>
    );
}
