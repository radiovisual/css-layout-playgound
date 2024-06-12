import React from "react";
import pkg from "../../../../package.json";

import styles from "./header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.name}>
        CSS Layout Playground{" "}
        <span className={styles.version}>v{pkg.version}</span>
      </div>
      <div className={styles.links}>
        <Link href="/flex">Flex</Link>
        <Link href="/grid">Grid</Link>
      </div>
    </nav>
  );
}
