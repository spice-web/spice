import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer
    style={{
      marginTop: `var(--space-5)`,
      fontSize: `var(--font-sm)`,
    }}
  >
    © 2011 - {new Date().getFullYear()} {` `} 株式会社スパイス
  </footer>
)

export default Footer