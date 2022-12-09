import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Navigation = dynamic(() => import("../../components/Navigation"));
import SEO from "../../components/SEO";

import { motion, useDragControls } from "framer-motion";

import { namesOfDatas } from "../../portfolio";

import styles from "../../styles/Dashborad.module.css"

export default function Home() {
  const controls = useDragControls();

  function handleSelected(e) {
    console.log(e.target.value);
  }

  function startDrag(event) {
    controls.start(event)
    controls.start(event, { snapToCursor: true })
  }

  return (
    <div className={styles.content}>
      <SEO />
      <Navigation />
      <main className={styles.main}>
        <h1>Selecione a categoria</h1>
        <div>
          <select className={styles.select} onChange={handleSelected} name="itens" id="itens">
            <option value="">----------</option>
            {namesOfDatas.map((e, i) => (
              <option
                key={i}
                value={e.toLowerCase()}
              >
                {e[0].toUpperCase() + e.substring(1)}
              </option>
            ))}
          </select>
        </div>

        <div onPointerDown={startDrag} className={styles.BoxChange}>
          <div
            className={styles.BoxChangeItem}
          >

          </div>
          <div
            className={styles.BoxChangeItem}
          >

          </div>
          <div
            className={styles.BoxChangeItem}
          >

          </div>
        </div>
      </main>
    </div>
  );
}
