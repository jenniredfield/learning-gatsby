import React from "react"
import Layout from "../components/layout"

export default function ProductsTemplate(obj) {
console.log("🚀 ~ file: product-template.js ~ line 6 ~ BlogPost ~ obj", obj)


  return (
    <Layout>
      <div>
        <h1>Products</h1>

      </div>
    </Layout>
  )
}
// How did it know to use what slug? maybe with the context from before
// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `