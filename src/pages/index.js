import React, { useEffect, useState, useRef } from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "../styles/_index.module.scss"

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

const IndexPage = ({ data }) => {

  // スクロールでアニメーション処理
  const elementRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleScroll = () => {
    const element = elementRef.current;
    if (element) {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight) {
        setShouldAnimate(true);
      } else {
        setShouldAnimate(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <div className={`${styles.hero}`}>
        <StaticImage
          src="../images/top/top_main.jpg"
        />
      </div>

      <h2 ref={elementRef} className={`${styles.read} ${shouldAnimate ? styles.bounce : ""}`}>For Business.<br />
Give Spice.</h2>

      <h3 className={`${styles.headline}`}>企業のプロジェクトに独自の刺激を</h3>
      <p className="center">株式会社スパイスは、<br className="br_max-sm" />あらゆるプロジェクトに<br className="br_max-sm" />独自の視点で付加価値を加え、<br />客観的に俯瞰して目的を見据え、<br className="br_max-sm" />新たな視点をご提案します。</p>

      {/* サービス */}
      <div className={styles.parallax}>
        <div className={styles.box}>
          <div className={styles.parallaxsubTitle}>事業・サービス</div>
          <h2 className={styles.parallaxTitle}>
            SERVICE
          </h2>

          <div className={styles.rightBox}>
            <p className={styles.contentsTitle}>自分たちが成長するために<br />
              新たな分野にも挑戦し続ける</p>
            <p className={styles.contentsText}>Eコマース事業、商品開発、ポイントカード事業、<br />
              QRコード決済事業、広告代理・制作など、<br />
              独自のネットワークとフットワークで展開しています。</p>
            <a className="button button--black" href="/service">サービス一覧
              <StaticImage
                src="../images/icon/arrow_w.png"
                className={`buttonArrow`}
              />
            </a>
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
            <div className={styles.parallaxsubTitle}>商品開発&販売</div>
            <h2 className={styles.parallaxTitle}>PRODUCTS</h2>
          </div>
          <div className={styles.rightBox}>
            <p className={styles.contentsTitle}>商品開発支援から販売サポートまで
              トータルでサポート</p>
            <p className={styles.contentsText}>企業の商品の価値を高め、ターゲットに合った販売戦略を行います。<br />
              ときには商品開発に携わり、適切な販売経路を模索し、ブランディングやパッケージの変更などあらゆる面からサポートします。</p>
            <a className="button button--black" href="/service">取扱商品一覧
              <StaticImage
                src="../images/icon/arrow_w.png"
                className={`buttonArrow`}
              />
            </a>
          </div>
        </div>

      </div>

      {/* information block */}
      <div>
        <h2 className={`${styles.informationTitle}`}>
          INFORMATION
        </h2>
        <div className="c-postList l-inner">
          {data.allMicrocmsInformation.edges.map(({ node }) => (
            <div className='c-postList__item'>
              <Link
                to={`/information/${node.informationId}`}
                className={`c-postList__link`}
              >
                {node.thumbnail ? (
                  <img
                    src={node.thumbnail.url}
                    alt="Thumbnail"
                    className={`c-postList__thumb`}
                  />
                ) : (
                  <StaticImage
                    src="../images/noimage.jpg" // デフォルトのイメージパス
                    alt="Default Thumbnail"
                    className={`c-postList__thumb`}
                  />
                )}
                <div className="c-postList__item-contents">
                  <div className="c-postList__item-date">{node.date}</div>
                  <h3>{node.title}</h3>
                  <p>{node.excerpt}</p>
                  
                  <div className="c-postList__item-cate">
                    {node.category.category}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage


export const query = graphql`
  query {
    allMicrocmsInformation ( limit:4, sort:{fields: date, order:DESC} ) {
      edges {
        node {
          informationId
          title
          date(formatString: "YYYY年 MM月 DD日")
          category {
            category
          }
          excerpt
          thumbnail {
            url
            height
            width
          }
        }
      }
    }
  }`