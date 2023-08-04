import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  const jigyo = ["商品開発・コンサルティング", "ホームページ制作", "DTP制作", "ショッピングモール・ECサイト運営管理", "化粧品OEM", "洗浄剤CODE販売店", "ポイント事業　CN加盟店", "旅行業支援システム、アシスト業務"];
  return (
    <Layout>
      <Seo title="会社概要" />
    
      {/* コンテナ */}
      <div className="container w-full grid grid-cols-12 mx-auto gap-2">

        {/* 表題ブロック */}
        <div className="col-span-12 bg-indigo-400 text-xl text-white p-2 mt-10">
          会社概要
        </div>

        {/* テーブルブロック */}
        <div className="col-span-12 p-3">
          <table className="table-auto w-full">
            <tbody>
              <tr>
                <td className="border px-4 py-2">社名</td>
                <td className="border px-4 py-2">株式会社スパイス</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="border px-4 py-2">所在地</td>
                <td className="border px-4 py-2">広島県広島市西区観音町13-9</td>
              </tr>
              <tr className="">
                <td className="border px-4 py-2">TEL</td>
                <td className="border px-4 py-2">082-209-0601</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="border px-4 py-2">FAX</td>
                <td className="border px-4 py-2">082-209-0602</td>
              </tr>
              <tr className="">
                <td className="border px-4 py-2">設立</td>
                <td className="border px-4 py-2">2008年1月17日</td>
              </tr>
              <tr className="bg-gray-200">
                <td className="border px-4 py-2">営業時間</td>
                <td className="border px-4 py-2">平日: 9:00～18:00</td>
              </tr>
              <tr className="">
                <td className="border px-4 py-2">事業内容</td>
                <td className="border px-4 py-2">
                  <ul>
                    {jigyo.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>

  )
}

export default AboutPage