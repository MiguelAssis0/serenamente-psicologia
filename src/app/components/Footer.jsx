"use client";
import { useState } from "react";
import styles from "../page.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Footer() {

  const [position, setPosition] = useState([-21.2922, -50.3428]);

  const mapOptions = {
    center: position,
    zoom: 13,
    scrollWheelZoom: false,
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    zoomControl: false,
    attributionControl: false,
  };

  return (
    <footer className={styles.footer} id="Contato">
      <section className={styles.footer__front} data-aos="fade-up">
        <article className={styles.contact} data-aos="fade-right">
          <form action="">
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
        <article className={styles.local} data-aos="fade-in">
          <MapContainer
            {...mapOptions}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </MapContainer>
        </article>
      </section>
      <section className={styles.footer__copyright}>
        <p>Copyright &copy; 2024. Todos os direitos reservados.</p>
      </section>
    </footer>
  );
}
