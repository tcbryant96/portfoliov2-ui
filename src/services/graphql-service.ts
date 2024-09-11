import apolloClient from "@/utilities/apollo-client";
import { gql } from "@apollo/client/core";
import { GET_PROJECTS, GET_NAVIGATION_LINKS } from "@/models/query-types";
import { Project, NavigationLink } from "@/models/types";

export const graphqlService = {
  async getProjects(): Promise<Project[]> {
    try {
      const { data } = await apolloClient.query({
        query: gql(GET_PROJECTS),
      });
      return data.projects;
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  },
  async getNavigationLinks(): Promise<NavigationLink[]> {
    try {
      const { data } = await apolloClient.query({
        query: gql(GET_NAVIGATION_LINKS),
      });
      return data.navigationLinks;
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  },
};
