import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
    const data = useStaticQuery(graphql`
        query MenuQuery {
            wpMenu(name: { eq: "MainMenu" }) {
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
