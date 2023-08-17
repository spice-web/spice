import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import DrawerMenu from './drawerMenu'

const Header = ({ siteTitle }) => (
  <header className="l-header">
    <div className="l-header__logo">
      <StaticImage
        alt="株式会社スパイス ロゴ"
        className={ `logo` }
        src="../images/logo.svg"
      />
      <div className="l-header__txt">企業の味に旨みをプラス 株式会社スパイス</div>
    </div>

    <nav className="nav">
      <div className="nav__list service"><Link to="/service">事業・サービス</Link></div>
      <div className="nav__list product"><Link to="/product">商品開発&販売</Link></div>
      <div className="nav__list information"><Link to="/information">お知らせ</Link></div>
      <div className="nav__list company"><Link to="/company">会社概要</Link></div>
      <div className="nav__list contact"><Link to="/contact">お問い合わせ</Link></div>
    </nav>

    <DrawerMenu />

  </header>
)

export default Header
