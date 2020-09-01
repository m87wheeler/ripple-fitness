import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {data.allContentfulProgramSection.edges.map(node => (
        <h1 key={node.node.title}>{node.node.title}</h1>
      ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allContentfulProgramSection {
      edges {
        node {
          title
          shortDescription
          icon {
            file {
              url
            }
          }
          childContentfulProgramSectionSectionDetailsRichTextNode {
            sectionDetails
          }
        }
      }
    }
  }
`
