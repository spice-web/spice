// 「5.2.2 スラグを自動作成させる」で書くコード↓
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// インフォメーション記事詳細
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    `
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }`
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/info-post.js`),
        context: {
          slug: node.fields.slug
        },
        // defer: false,
        defer: node.fields.slug<"/news002/",
      })
    })

    return null
  })
}
