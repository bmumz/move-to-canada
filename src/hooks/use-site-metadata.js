import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            phone
            phoneAlt
            email
            siteUrl
            copyright
            description
            keywords
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
