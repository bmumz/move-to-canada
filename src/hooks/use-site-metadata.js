import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            phone
            email
            siteUrl
            copyright
            description
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
