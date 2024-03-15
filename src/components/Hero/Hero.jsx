import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey,</h1>
        <p className={styles.description}>
        Ich bin Betül, Medieninformatik Studentin mit etwas Erfahrung mit React und NodeJS.
        Melden Sie sich um mich näher kennenzulernen. 
        </p>
        <a href="mailto:betuel.guel55@gmail.com" className={styles.ContactBtn}>
          Kontakt
        </a>
      </div>
      <img
        src={getImageUrl("hero/bild.webp")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
