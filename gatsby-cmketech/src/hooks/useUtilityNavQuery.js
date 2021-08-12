import { useStaticQuery, graphql } from "gatsby"

export const useUtilityNavQuery = () => {
    const data = useStaticQuery(graphql`
        query UtilityNavQuery {
            wpMenu(name: { eq: "utilityNav" }) {
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
