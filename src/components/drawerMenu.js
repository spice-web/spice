import React, { useState } from "react";
import * as styles from "../styles/_header.module.scss"; // スタイルをインポート

const DrawerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.DrawerNavMenu} ${isMenuOpen ? styles.open : ''}`}>
      {/* メニューのトグルを切り替えるアイコン */}
      <div className={`${styles.DrawerNavButton} ${isMenuOpen ? styles.close : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={`${styles.DrawerMenuList} ${isMenuOpen ? styles.open : ''}`}>
        <li className={styles.DrawerMenuItem}>Menu Item 1</li>
        <li className={styles.DrawerMenuItem}>Menu Item 2</li>
        <li className={styles.DrawerMenuItem}>Menu Item 3</li>
      </ul>
    </div>
  );
};

export default DrawerMenu;