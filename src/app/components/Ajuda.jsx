"use client";
import styles from "../page.module.css";
import Image from "next/image";
import anxiety from "../assets/help/anxiety.png";
import depression from "../assets/help/depression.png";
import relationship from "../assets/help/relation.png";
import mentalhealth from "../assets/help/cerebral.png";
import personality from "../assets/help/personalidade.png";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Ajuda() {
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        // Inicialização do AOS
        if (typeof window !== "undefined") {
            Aos.init({
                duration: 2000,
                once: true,
            });
        }

        const services = [
            {
                id: 1,
                image: anxiety,
                nome: "Tratamento de ansiedade",
            },
            {
                id: 2,
                image: depression,
                nome: "Tratamento de depressão",
            },
            {
                id: 3,
                image: personality,
                nome: "Tratamento de transtorno de personalidade",
            },
            {
                id: 4,
                image: relationship,
                nome: "Ajuda com o relacionamento interpessoal",
            },
            {
                id: 5,
                image: mentalhealth,
                nome: "Melhora de condição mental",
            }
        ];

        setServicos(services);
    }, []);

    return (
        <section className={styles.ajuda}>
            <h2 data-aos="fade-up">Como posso te ajudar?</h2>
            <article>
                {servicos.map((servico) => (
                    <div
                        className={styles.ajuda__card}
                        key={servico.id}
                        data-aos="zoom-in" // Animação ao entrar na tela
                    >
                        <Image
                            src={servico.image}
                            alt={servico.nome}
                            width={100}
                            height={100}
                        />
                        <p>{servico.nome}</p>
                    </div>
                ))}
            </article>
        </section>
    );
}
