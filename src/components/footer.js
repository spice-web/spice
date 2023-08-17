import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from '../styles/_footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`inner ${styles.inner}`}>
      <div className={styles.footer__logo}>
        <StaticImage
          alt="株式会社スパイス ロゴ"
          className={ `${styles.logo}` }
          src="../images/logo.svg"
        />
      </div>

      <h2 className={styles.companyName}>株式会社スパイス</h2>
      <ul className={styles.companyInfo}>
        <li className={`${styles.companyInfo__list} ${styles.address}`}><span className={styles.zip}>〒733-0031</span>広島県広島市西区観音町13番9号</li>
        <li className={styles.companyInfo__list}>TEL：082-209-0601</li>
        <li className={styles.companyInfo__list}>FAX：082-209-0602</li>
        <li className={`{styles.companyInfo__list} ${styles.mail}`}>Email：<span className="spamCheck">info</span>spice-web.jp</li>
      </ul>

      <ul className={styles.footerNav}>
        <li className={styles.footerNav__item}><a href="/service">商品開発&amp;販売</a></li>
        <li className={styles.footerNav__item}><a href="/product">事業内容</a></li>
        <li className={styles.footerNav__item}><a href="/information">新着情報</a></li>
        <li className={styles.footerNav__item}><a href="/company">会社概要</a></li>
        <li className={styles.footerNav__item}><a href="/contact">お問い合わせ</a></li>
        <li className={styles.footerNav__item}><a href="privacy">プライバシーポリシー</a></li>
        <li className={styles.footerNav__item}><a href="sitemap">サイトマップ</a></li>
        <li className={styles.footerNav__item}><a href="low">特定商取引法に基づく表記</a></li>
        
      </ul>

    </div>
    <div className={styles.copyright}>© 2011 - {new Date().getFullYear()} {` `} 株式会社スパイス</div>
  </footer>
)

export default Footer