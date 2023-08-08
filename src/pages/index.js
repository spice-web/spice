import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"
import * as styles from "../styles/_index.module.scss"

const IndexPage = ({ data }) => {
  const serviceList = [
    { id: 'ec1', label: 'アパレル・雑貨ECサイト「フラッチ」運営', link: 'service.php#ec' },
    { id: 'ec2', label: 'コンタクトレンズECサイト「アイズコンタクト」運営', link: 'service.php#ec' },
    { id: 'oem', label: '化粧品OEM', link: null },
    { id: 'consulting', label: 'コンサルティング業務', link: null },
    { id: 'qr', label: 'QRコード決済サービス', link: 'service.php#qr' },
    { id: 'cn_point', label: '「クラブネッツ」CNポイント代理店', link: 'service.php#cn_point' },
    { id: 'tabi', label: '旅行業支援システム・アシスト業務', link: 'service.php#tabi' },
    { id: 'work_web', label: 'ホームページ・DTP制作', link: 'service.php#work_web' },
    { id: 'code', label: '洗浄剤CODE販売店', link: 'service.php#code' },
  ];

  return (
  <Layout>
    <Seo title="Home" />
    {/* コンテナ　*/}
    <div className="container">
      {/* トップ画像ブロック */}
      <div className={`l-inner {styles.hero}`}>
        <StaticImage
          src="../images/top/main.jpg"
            alt="For Business Give Spice"
            style={{ width: "100%", marginLeft: 0, marginRight:"auto" }}
        />
      </div>
      
      <p className={styles.headline}>企業のプロジェクトに独自の刺激を</p>
      <p className="center">株式会社スパイスは、<br className="br_max-sm" />あらゆるプロジェクトに独自の視点で付加価値を加え、<br />客観的に俯瞰して目的を見据え、新たな視点をご提案します。</p>
      
        {/* サービス */}
      <div className={styles.parallax}>
        <div className={styles.box}>
          <div>
            <div className={styles.subTitle}>事業・サービス</div>
            <h2>Service</h2>
          </div>

          <div className={styles.rightBox}>
            <p class="title">自分たちが成長するために<br />
              新たな分野にも挑戦し続ける</p>
            <p class="txt">Eコマース事業、商品開発、ポイントカード事業、<br />
              QRコード決済事業、広告代理・制作など、<br />
              独自のネットワークとフットワークで展開しています。</p>
            <a className="button button--black" href="/service">取扱商品一覧</a>
          </div>
        </div>
      </div>

      <ul className={`l-inner ${styles.serviceList}`}>
        {serviceList.map(item => (
          <li key={item.id} className={styles.serviceListItem}>
            {item.link ? (
              <a href={item.link} aria-label={item.label}>{item.label}</a>) : (item.label)
            }            
          </li>
        ))}
        </ul>
        
        {/* Product */}
        <div className={styles.parallax}>
          <div className={styles.box}>
                      <div>
            <div className={styles.subTitle}>商品開発&販売</div>
            <h2>Products</h2>
          </div>
          <div className={styles.rightBox}>
            <p className="title">商品開発支援から販売サポートまで
              トータルでサポート</p>
            <p>企業の商品の価値を高め、ターゲットに合った販売戦略を行います。<br />
              ときには商品開発に携わり、適切な販売経路を模索し、ブランディングやパッケージの変更などあらゆる面からサポートします。</p>
            <a className="button button--black" href="/products">取扱商品一覧</a>
          </div>
          </div>

        </div>
      
      {/* information block */}

      <div>
        <div className="">
          インフォメーション
        </div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="col-span-6 sm:col-span-12 md:col-span-6 lg:col-span-6 p-1 h-10">
            <Link to={node.fields.slug}>{node.frontmatter.date}{` `}{node.frontmatter.title}</Link>
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
}
  
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