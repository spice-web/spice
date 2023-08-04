import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="flex items-center justify-between flex-wrap bg-gray-200 p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link to="/" className="text-gray-700 hover:text-gray-400">
          <span className="font-medium text-xl tracking-tight">株式会社スパイス</span>
        </Link>
      </div>

      <div className="w-full block flex-grow md:flex lg:items-center lg:w-auto">
        <div className="text-lg md:flex-grow lg:flex-grow">
          <div className="block mt-4 lg:inline-block lg:mt-0 mr-4">
            <Link to="/service" className="text-gray-700 hover:text-gray-400">事業・サービス</Link>
          </div>
          <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-400 mr-4">
            <Link to="/products" className="text-gray-700 hover:text-gray-400">商品開発・販売</Link>
          </div>
          <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-400 mr-4">
            <Link to="/information" className="text-gray-700 hover:text-gray-400">お知らせ</Link>
          </div>
          <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-400 mr-4">
            <Link to="/company" className="text-gray-700 hover:text-gray-400">会社概要</Link>
          </div>
          <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-400 mr-4">
            <Link to="/contact" className="text-gray-700 hover:text-gray-400">お問い合わせ</Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
