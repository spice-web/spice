import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const InformationPost = ({ data }) => (
  <Layout>
    <Seo title={data.markdownRemark.frontmatter.title} />

    {/* コンテナ */}
    <div className="container w-full grid grid-cols-12 mx-auto gap-2">

      {/* 表題ブロック */}
      <div className="col-span-12 col-span-10 p-3">
        <div className="w-full font-medium text-base mb-3">
          {data.markdownRemark.frontmatter.date}
        </div>
        <div className="col-span-12 p-3" dangerouslySetInnerHTML={{ __html:data.markdownRemark.html}}></div>
      </div>
    </div>
  </Layout>
)

export default InformationPost

export const query = graphql`
query($slug:String!) {
  markdownRemark(fields: {slug: {eq:$slug}}) {
    html
    frontmatter {
      date(formatString: "YYYY年 MM日 DD日")
      title
    }
  }
}`