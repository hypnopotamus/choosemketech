import { useStaticQuery, graphql } from "gatsby"

export const useFooterQuery = () => {
    const data = useStaticQuery(graphql`
        query FooterMenuQuery {
            wpMenu(name: { eq: "FooterMenu" }) {
                menuItems {
                    nodes {
                        label
                        url
                        parentId
                        id
                        cssClasses
                    }
                }
            }
        }
    `)

    return data
}
