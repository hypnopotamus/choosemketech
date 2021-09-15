import { useStaticQuery, graphql } from "gatsby"

export const useFooterMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query FooterMenuQuery {
      wpMenu(name: { eq: "FooterMenu" }) {
        menuItems {
          nodes {
            label
            url
            parentId
            id
            childItems {
              nodes {
                url
                id
                label
              }
            }
          }
        }
      }
    }
  `)

  return data
}
