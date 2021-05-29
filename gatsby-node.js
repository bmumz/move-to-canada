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
  const teamBioTemplate = path.resolve(`./src/templates/teamBio.js`);

  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
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
    // const slug = edge.node.fields.slug;
    createPage({
      component: teamBioTemplate,
      path: `/our-team/${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
