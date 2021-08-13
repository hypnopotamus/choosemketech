import { useStaticQuery, graphql } from "gatsby"; 

export const useHeroQuery = () => {
    const data = useStaticQuery(graphql`
        query HeroQuery {
            wpPage(databaseId : {eq: 102}) {
                LandingPage_CF {
                    heroVideo
                    heroText
                    heroSubText
                    heroImage {
                        sourceUrl
                    }                    
                }
            }
        }
    `)
    return data
}