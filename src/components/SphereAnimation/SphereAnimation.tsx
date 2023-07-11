/*  
    --- SphereAnimation.tsx ---
    Copyright © 2023 Alec Greene - All Rights Reserved.
    Author: Alec Greene

    About: 
        * 

    TO DO: 
        * 
*/

import React from "react";
import styles from "./SphereAnimation.module.css";

const SphereAnimation: React.FC = () => {
  const slices = 9;
  const angle = 360 / slices;

  return (
    <div className={styles.wrapper}>
      <div className={styles.sphere}>
        <div className={`${styles.slice} ${styles.equator}`}></div>
        <div
          className={`${styles.slice} ${styles.tropic} ${styles.cancer}`}
        ></div>
        <div
          className={`${styles.slice} ${styles.tropic} ${styles.capricorn}`}
        ></div>
        {[...Array(slices - 1)].map((_, i) => (
          <div
            key={i}
            className={styles.slice}
            style={{ transform: `rotateY(${angle * i}deg)` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SphereAnimation;
