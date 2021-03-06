import { useStaticQuery, graphql } from "gatsby"; 

export const useHeroQuery = () => {
    const data = useStaticQuery(graphql`
        query HeroQuery {
            wpPage(databaseId : {eq: 102} ) {
                Pages_CF {
                    heroImage {
                        sourceUrl
                    }
                    heroVideo
                    heroText
                    heroSubText
                }
            }
        }
    `)
    return data
}