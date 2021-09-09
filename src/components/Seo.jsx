import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

export const Seo = ({description, title, keyword}) => {
    return(
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription = description || data.site.siteMetadata.description
                const metaTitle = title || data.site.siteMetadata.title
                // const metaAuthor = author || data.site.siteMetadata.title
                const metaKeywords = keyword || ["interior design", "design consultation", "consultation near me", "decor", "deor shopping", "decor light", "decor ideas", "decor home", "home decor ideas", "how decor living room"]
                return(
                    <Helmet 
                    title={title}
                    meta={[
                        {
                            name:`description`,
                            content: metaDescription
                        },
                        {
                            property: `og:title`,
                            content: metaTitle
                        },
                        {
                            property:`og:description`,
                            content: metaDescription
                        },
                        {
                            property:`og:type`,
                            content: `website`
                        },
                        // {
                        //     name:`twitter:creator`,
                        //     content: metaAuthor
                        // },
                    ].concat(
                        metaKeywords && metaKeywords.length > 0 ? {
                            name:`keywords`,
                            content: metaKeywords.join(`, `)
                        } : []
                    )
                    }
                    />
                )
            }}
        />
    );
}

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site{
            siteMetadata {
                title
                description
            }
        }
    }
`