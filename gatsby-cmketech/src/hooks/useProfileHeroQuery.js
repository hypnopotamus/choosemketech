import { useStaticQuery, graphql } from "gatsby"

export const useProfileHeroQuery = () => {
    const data = useStaticQuery(graphql`
        query ProfileHeroQuery {
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
