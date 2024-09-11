export const GET_PROJECTS = `
  query {
    projects {
      title
      url
      technologiesUsed
      dateCreated
      taskDescriptions {
        taskName
        description
      }
    }
  }
`;

export const GET_NAVIGATION_LINKS = `
  query {
    navigationLinks {
      name
      url
    }
  }
`;
