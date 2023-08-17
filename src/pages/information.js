import * as React from "react"
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"
import Seo from "../components/seo"

const informationPage = ({ data }) => (
  <Layout>
    <Seo title="お知らせ" />

    {/* コンテナ */}
    <div className="container w-full grid grid-cols-12 mx-auto gap-2">

      {/* 表題ブロック */}
      <div className="col-span-12 bg-indigo-400 text-xl text-xl text-white p-2 mt-10 mb-6">
        インフォメーション
      </div>

      {/* カードブロック */}
      {/* カード */}
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 rounded border border-1 border-gray-200">
          <div className="px-4 py-2">
            <div className="font-medium text-lg text-indigo-700 mb-2">
              <Link to={node.fields.slug}>
                {node.frontmatter.title}
              </Link>
            </div>
            <p className="text-gray-700 text-base">{ node.excerpt }</p>
          </div>
        </div>
      ))}
    </div>
  </Layout>
)

export default informationPage

export const query = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        excerpt(pruneLength: 50, truncate: true) 
        frontmatter {
          title
          date(formatString: "YYYY年 MM月 DD日")
        }
        fields {
          slug
        }
      }
    }
  }
}`