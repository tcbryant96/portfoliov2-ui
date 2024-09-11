export interface Project {
  title: string;
  url: string;
  technologiesUsed: string[];
  dateCreated: string;
  taskDescriptions: TaskDescription[];
}

export interface TaskDescription {
  taskName: string;
  description: string;
}

export interface NavigationLink {
  name: string;
  url: string;
}
