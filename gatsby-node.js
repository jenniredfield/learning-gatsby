const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const productsJson = require('./src/json/products.json')

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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  });



  productsJson.products.forEach(product => {
  console.log("🚀 ~ file: gatsby-node.js ~ line 48 ~ exports.createPages= ~ product", product)
      createPage({
          path: product.slug,
          component: path.resolve(`./src/templates/product-template.js`),
          context: {
              slug: product.slug
          }
      })
  })
}