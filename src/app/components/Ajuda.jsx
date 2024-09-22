import styles from "../page.module.css";
import Image from "next/image";
import Aos from "aos"; 

import anxiety from "../assets/help/anxiety.png";
import depression from "../assets/help/depression.png";
import relationship from "../assets/help/relation.png";
import mentalhealth from "../assets/help/cerebral.png";
import personality from "../assets/help/personalidade.png";

import { useEffect } from "react";

export default function Ajuda() {

    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true
        });
    }, []);

    const servicos = [
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

    return (
        <section className={styles.ajuda}>
            <h2 data-aos="fade-up">Como posso te ajudar?</h2>
            <article>
                {servicos.map((servico) => (
                    <div
                        className={styles.ajuda__card}
                        key={servico.id}
                        data-aos="fade-up"
                        data-aos-delay={`${servico.id * 100}`} 
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
