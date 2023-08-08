import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import DrawerMenu from './DrawerMenu';
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="inner">
      <div className="logo">
        <span className="copy">企業の味に旨みをプラス 株式会社スパイス</span>
        <Link to="/" className="logoLink">
          <img
            alt="株式会社スパイス"
            width={80}
            style={{ marginBottom: 0 }}
          src="data:image/svg+xml;base64,PHN2ZyBpZD0i44Os44Kk44Ok44O8XzEiIGRhdGEtbmFtZT0i44Os44Kk44Ok44O8IDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE1NCA1NyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNlYTczMjk7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIyLjUzLDI3Ljc1SDUuNDdhMTEuOSwxMS45LDAsMCwxLDIxLjI3LTQuNjdoNS4xYTE2LjI5LDE2LjI5LDAsMCwwLTMxLDdBMTYuNTYsMTYuNTYsMCwwLDAsMSwzMi40NEgyOC44QTExLjksMTEuOSwwLDAsMSw3LjU1LDM3LjEzSDIuNDVhMTYuMjgsMTYuMjgsMCwwLDAsMzAuOC05LjM2SDIyLjUzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU0LjQ1LDEzLjgxQTE2LjI4LDE2LjI4LDAsMCwwLDM4LjE5LDI5LjMzaDBWNTYuOTJoNC43VjQxLjUzQTE2LjI5LDE2LjI5LDAsMSwwLDU0LjQ1LDEzLjgxWm0wLDI4LjE3QTExLjg5LDExLjg5LDAsMSwxLDY2LjM0LDMwLjA5LDExLjg5LDExLjg5LDAsMCwxLDU0LjQ1LDQyWiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iNzUuOCIgeT0iMTMuOTUiIHdpZHRoPSI1LjEyIiBoZWlnaHQ9IjMyLjQyIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNzkuNDIsMTAuNTRhMS41OSwxLjU5LDAsMCwxLTIuMjgsMEw3My4yOCw2LjY4YTEuNiwxLjYsMCwwLDEsMC0yLjI3TDc3LjE0LjU1YTEuNjEsMS42MSwwLDAsMSwyLjI4LDBsMy44NSwzLjg2YTEuNiwxLjYsMCwwLDEsMCwyLjI3WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwMi4xLDQyQTExLjg5LDExLjg5LDAsMSwxLDExMi44NiwyNWg0LjcyYTE2LjI4LDE2LjI4LDAsMSwwLC4xMSw5Ljc2SDExM0ExMS45MSwxMS45MSwwLDAsMSwxMDIuMSw0MloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDguNDgsMzQuOGExMS45LDExLjksMCwwLDEtMjIuNTQtMi4xNWgxNS4zMlYyNy41M0gxMjUuOTRBMTEuODksMTEuODksMCwwLDEsMTQ4LjMyLDI1SDE1M2ExNi4yNywxNi4yNywwLDEsMCwuMTIsOS43NloiLz48L3N2Zz4="/>
        </Link>        
      </div>

      {/* ナビゲーション */}
      <nav className="navWrap">
        <div className="navItem service">
            <Link to="/service" className="text-gray-700 hover:text-gray-400">事業・サービス<span>service</span></Link>
        </div>
        <div className="navItem products">
          <Link to="/products" className="text-gray-700 hover:text-gray-400">商品開発・販売<span>products</span></Link>
        </div>
        <div className="navItem information">
          <Link to="/information" className="text-gray-700 hover:text-gray-400">お知らせ<span>information</span></Link>
        </div>
        <div className="navItem company">
          <Link to="/company" className="text-gray-700 hover:text-gray-400">会社概要<span>company</span></Link>
        </div>
        <div className="navItem contact">
          <Link to="/contact" className="text-gray-700 hover:text-gray-400">お問い合わせ<span>contact</span></Link>
        </div>
      </nav>

      {/* ドロワーメニュー */}
      <DrawerMenu />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
