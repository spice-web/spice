// gatsby-node.jsは、Gatsby Node API を記述するファイルです。 gatsby-node. js の コード は ビルドプロセス で 1 回 実行されます。 静的ページを動的に生成したり、GraphQLにノードを追加したり、ビルドライフサイクル中にイベント応答したりできます。
// 「 Gatsby Node API を使用するには、プロジェクトルートに存在するgatsby-node.jsという名前のファイルを使用する」

const path = require('path');
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `{
      allMicrocmsInformation {
        edges {
          node {
            informationId
          }
        }
      }
    }`
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMicrocmsInformation.edges.forEach( edge => {
      createPage({
        path: `/information/${edge.node.informationId}`,
        component: path.resolve(`./src/templates/info-post.js`),
        context: {
          id: edge.node.informationId
        },
        defer: false,
      })
    })
  })
}

// 「5.2.2 スラグを自動作成させる」で書くコード↓
// const { createFilePath } = require(`gatsby-source-filesystem`)
// const path = require(`path`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

// // インフォメーション記事詳細
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(
//     `
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }`
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.fields.slug,
//         component: path.resolve(`./src/templates/info-post.js`),
//         context: {
//           slug: node.fields.slug
//         },
//         // defer: false,
//         defer: node.fields.slug<"/news002/",
//       })
//     })

//     return null
//   })
// }

