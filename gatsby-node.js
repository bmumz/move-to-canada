const path = require("path");

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

// iterate over posts and create new page per post

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              pageType
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const pages = response.data.allMarkdownRemark.edges;

  pages.forEach(({ node }) => {
    const pageType = node.frontmatter.pageType;
    const slug = node.fields.slug;
    let component;
    let pagePath;

    switch (pageType) {
      case "service":
        component = path.resolve(`./src/templates/servicePg.js`);
        pagePath = `services/${slug}`;
        break;
      case "team":
        component = path.resolve(`./src/templates/teamBio.js`);
        pagePath = `our-team/${slug}`;
        break;
      default:
        throw "@@@@@@@@@@ Page Type missing from MD file! @@@@@@@@@@";
    }

    createPage({
      component,
      path: pagePath,
      context: {
        slug,
      },
    });
  });
};
