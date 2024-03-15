import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Über Mich</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/avatarSitzend.webp")}
          alt="Me sitting with a laptop"
          className={styles.AboutImage}
        />
        <ul className={styles.AboutItems}>
          <li className={styles.AboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.AboutItemText}>
              <h3>Leidenschaftlich für Frontend</h3>
              <p>
              Meine Begeisterung für die Schnittstelle von Design und Technologie treibt meine Neugier an.
              </p>
            </div>
          </li>
          <li className={styles.AboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.AboutItemText}>
              <h3>Selbstmotivation und Lernbereitschaft</h3>
              <p>
              Ich bin hoch motiviert, 
              meine Fähigkeiten in der Frontend-Entwicklung kontinuierlich zu erweitern.
              </p>
            </div>
          </li>
          <li className={styles.AboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.AboutItemText}>
              <h3>Stärken und Fähigkeiten</h3>
              <p>
              Erfahrung mit JavaScript, React und Figma:
              bereit, kreative Konzepte in innovative Frontend-Lösungen umzusetzen.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
