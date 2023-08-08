import React, { useState } from "react"
import "./drawerMenu.scss"

const DrawerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}>
      {/* メニューのトグルを切り替えるアイコン */}
      <div className={`DrawerNavButton ${isMenuOpen ? 'close' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`DrawerMenuList ${isMenuOpen ? 'open' : ''}`}>
        <li className="DrawerMenuItem">Menu Item 1</li>
        <li className="DrawerMenuItem">Menu Item 2</li>
        <li className="DrawerMenuItem">Menu Item 3</li>
      </ul>
    </div>
  );
}

export default DrawerMenu;