/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

// google font指定
import "@fontsource/noto-sans-jp/100.css"
import "@fontsource/noto-sans-jp/300.css"
import "@fontsource/noto-sans-jp/400.css"
import "@fontsource/noto-sans-jp/500.css"
import "@fontsource/noto-sans-jp/700.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {/* スタイルは{{ … }}で囲む */}
      <div

        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          // padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main> {/* children以外不可 */}
        <footer
          className={`l-footer`}
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          <div className="l-inner l-footer__inner">
            <div className="l-footer__logo">
              <dl>
                <dt>株式会社スパイス</dt>
                <dd>
                  <ul>
                    <li>〒733-0031</li>
              <li>広島県広島市西区観音町13番9号</li>
              <li>TEL：082-209-0601</li>
              <li>FAX：082-209-0602</li>
              <li>MAIL：<span className="spamCheck">info</span>spice-web.jp</li>
                  </ul>
                </dd>
              </dl>
              

              
            </div>
            <div className="l-footer__info">

            </div>



            
          </div>
          <div className="l-footer__copy">© 2011 - {new Date().getFullYear()} &copy; {` `}
          SPICE CO.,LTD.</div>
        </footer>
      </div>
    </>
  )
}

export default Layout
