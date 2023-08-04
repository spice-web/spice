import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'

const contactPage = () => (
  <Layout>
    <Seo title="商品開発＆販売" />
    {/* コンテナ */}
    <div className="container-w-full grid grid-cols-12 mx-auto gap-2">

      {/* 表題ブロック */}
      <div className="col-span-12 bg-indigo-400 text-xl text-white p-2 mt-10">
        お問い合わせ
      </div>

      {/* フォームブロック */}
      <div className="col-start-2 col-span-10 p-3">
        <form action="">
          <div className="form-group mb-6">
            <label for="formName" className="form-label inline-block mb-2 text-gray-700">お名前</label>
            <input type="text" id="formName" className="form-control block w-full px-3 py-1.5 text-base font-nomal text-gray-700 bg-white border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder='お名前' />
          </div>
          <label for="formEmail" className="form-label inline-block mb-2-text-gray-700">メールアドレス</label>
          <div className="form-group mb-6">
            <input type="text" id="formEmail" className="form-control block w-full px-3 py-1 5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="test@aaa.com" />
          </div>
          <label htmlFor="formTextarea" className="form-label inline-block mb-2 text-gray-700"></label>
          <div className="form-group mb-6">
            <textarea row="3" placeholder='' id="formTextarea" cols="30" rows="10" className="form-control block w-full px-3 py-1 5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"></textarea>
          </div>
          <div className="form-group mb-2">
            <button className="w-2/12 px-6 py-2 5 bg-blue-700 border-2 border-solid border-indigo-600 text-white font-medium text-lg leading-tight rounded shadow-md hover:bg-indigo-400 hover:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150">送信</button>
          </div>
        </form>
      </div>
    </div>

  </Layout>
)

export default contactPage