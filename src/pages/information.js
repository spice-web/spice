import * as React from "react"
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "../styles/_post.module.scss" 

const informationPage = ({ data }) => (
  <Layout>

    {/* コンテナ */}
    <div className="inner">

      {/* 表題ブロック */}
      <div className="">
        インフォメーション
      </div>

      {/* カードブロック */}
      {/* カード */}
      <div className={styles.archiveWrap}>
      {data.allMicrocmsInformation.edges.map(({ node }) => (
        
          <div className={styles.archive}>
            
          <div className={styles.archiveCategory}>{node.category.category}</div><p className={styles.archiveDate}>{ node.date }</p>
          <div className={styles.archiveTitle}>
              <Link to={node.informationId}>
                {node.title}
              </Link>
            </div>
            <p className={styles.excerpt}>{node.excerpt}</p>           
          </div>
      ))}
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="お知らせ" />

export default informationPage

export const query = graphql`
query {
  allMicrocmsInformation(sort: { fields: [date], order: DESC }) {
    edges {
      node {
        body
        category {
          category
        }
        date(formatString: "YYYY年MM月DD日")
        informationId
        title
        excerpt
      }
    }
  }
}`