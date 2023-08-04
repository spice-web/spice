import * as React from 'react';
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ProductsPage = () => (
  <Layout>
    <Seo title="商品開発＆販売" />

    {/* コンテナ */}
    <div className="container w-full grid grid-cols-12 mx-auto gap-2">

      {/* 表題ブロック */}
      <div className="col-span-12 bg-indigo-400 text-xl text-white p-2 mt-10">
        事業内容
      </div>

      {/* カードブロック */}

      <div className="col-span-12 sm-col-span-12 md:col-span-6 lg:col-span-4 rounded overflow-hidden shadow-lg">
        <StaticImage className="w-full" src="../images/jigyo1.jpg" alt="" />
        <div className="px-4 py-2">
          <div className="font-medium text-xl text-indigo-700 mb-2">
            島ノ技巧「和柄焚き火台」
          </div>
          <p className="text-gray-700 text-base">
            島ノ技巧第2弾ステンレス製「和柄焚き火台」。日本の伝統和柄のパネルが照明として焚き火と相性がよく、和柄の陰影が落ち着いた時間と空間を演出ます。高性能レーザー加工機だからできる精細な和柄となってます。
          </p>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># デブリ</span>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm-col-span-12 md:col-span-6 lg:col-span-4 rounded overflow-hidden shadow-lg">
        <StaticImage className="w-full" src="../images/jigyo1.jpg" alt="" />
        <div className="px-4 py-2">
          <div className="font-medium text-xl text-indigo-700 mb-2">
            天然成分100％の除菌液 プリフル
          </div>
          <p className="text-gray-700 text-base">
            貝殻焼成カルシウムを原料とした天然成分100％の除菌液。強アルカリ性なのに、手指に使用しても荒れることなく、あらゆる場面でご利用になれます。
          </p>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># 除菌剤</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># キレイ</span>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm-col-span-12 md:col-span-6 lg:col-span-4 rounded overflow-hidden shadow-lg">
        <StaticImage className="w-full" src="../images/jigyo1.jpg" alt="" />
        <div className="px-4 py-2">
          <div className="font-medium text-xl text-indigo-700 mb-2">
            島ノ技巧 真鍮製ドアオープナー
          </div>
          <p className="text-gray-700 text-base">
            広島県尾道市向島にある造船艤装鉄工所"京泉工業"と共同開発した、新型コロナウイルス対策の真鍮製ドアオープナーです。
          </p>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># コロナ</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># 清潔</span>
          </div>
        </div>
      </div>

    </div>
  </Layout>

)

export default ProductsPage