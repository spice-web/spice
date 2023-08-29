import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const InformationPost = ({ data }) => (
  <Layout>
    <Seo title={data.microcmsInformation.title} />

    {/* コンテナ */}
    <div className="container">

      {/* 表題ブロック */}
      <div className="">
        <div className="">
          {data.microcmsInformation.tile}
        </div>
        <div className="" dangerouslySetInnerHTML={{ __html:data.microcmsInformation.body}}></div>
      </div>
    </div>
  </Layout>
)

export default InformationPost

export const query = graphql`
query($id:String!) {
  microcmsInformation(informationId: {eq:$id}) {
    informationId
    title
    date(formatString: "YYYY年 MM月 DD日")
    body
    category {
      category
    }
  }
}`