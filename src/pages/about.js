import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="about ページ" />
    <h1>about ページです</h1>
    <p>about ページにようこそ</p>
    <Link to="/">ホームに戻る</Link>
  </Layout>
)

export default AboutPage