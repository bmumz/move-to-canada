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
            website
            description
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
