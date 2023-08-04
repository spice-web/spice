import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    {/* コンテナ　*/ }
    <div className="container w-full grid grid-cols-12 mx-auto gap-2">
    {/* トップ画像ブロック */}
    <div className="col-span-12 bg-green-100 text-center p-0 border-solid border-4 border-red-400">
      <StaticImage
        src="../images/960x360.png"
        alt=""
      />
    </div>
      
      {/* information block */}

      <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 row-span-6 border-solid border-4 border-red-400">
        <div className="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 bg-indigo-400 front-medium text-white p-1 h-10">
          インフォメーション
        </div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 p-1 h-10">
            <Link to={node.fields.slug}>{node.frontmatter.date}{` `}{ node.frontmatter.title}</Link>
          </div>
        ))}
      </div>

      {/* IR情報 block */}
      <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 row-span-6 border-solid border-4 border-red-400">
        <div className="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 bg-indigo-400 front-medium text-white p-1 h-10">IR情報</div>
        <div className="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 p-1 h-10">IR情報</div>
        <div className="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 p-1 h-10">IR情報</div>
        <div className="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 p-1 h-10">ブログ</div>
        <div className="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 p-1 h-10">広告スペース</div>
        <div className="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 p-1 h-10">広告スペース</div>
      </div>

      {/* カードブロック */}
      <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 rounded overflow-hidden shadow-lg border-solid border-4 border-red-400">
        <StaticImage className="w-full" src="../images/286x180.png" alt="" />
        <div className="px-4 py-2">
          <div className="font-medium text-xl text-indigo-700 mb-2">事業内容①</div>
          <p className="text-gray-700 text-base">
            記事は出店裁判が承諾するprojectデータ以外、引用する方針が対話物フリーのさんしょうたいとるにありれてはありなおい。
          </p>
        </div>
      </div>

      {/* カードブロック */}
      <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 rounded overflow-hidden shadow-lg border-solid border-4 border-red-400">
        <StaticImage className="w-full" src="../images/286x180.png" alt="" />
        <div className="px-4 py-2">
          <div className="font-medium text-xl text-indigo-700 mb-2">事業内容①</div>
          <p className="text-gray-700 text-base">
            記事は出店裁判が承諾するprojectデータ以外、引用する方針が対話物フリーのさんしょうたいとるにありれてはありなおい。
          </p>
        </div>
      </div>

      {/* カードブロック */}
      <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 rounded overflow-hidden shadow-lg border-solid border-4 border-red-400">
        <StaticImage className="w-full" src="../images/286x180.png" alt="" />
        <div className="px-4 py-2">
          <div className="font-medium text-xl text-indigo-700 mb-2">事業内容①</div>
          <p className="text-gray-700 text-base">
            記事は出店裁判が承諾するprojectデータ以外、引用する方針が対話物フリーのさんしょうたいとるにありれてはありなおい。
          </p>
        </div>
      </div>

    </div>
    



  </Layout>
)
  
export default IndexPage

export const query = graphql`
query {
  allMarkdownRemark ( limit:4, sort:{fields: [frontmatter___date], order:DESC} ) {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "YYYY月 MM月 DD日")
        }
        fields {
          slug
        }
      }
    }
  }
}`