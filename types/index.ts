export type Tech = {
  icon: string;
  name: string;
  _id: {
    $oid: string;
  };
};

export type Education = {
  degree: string;
  institute: string;
  _id: string;
};
export type PreviousWork = {
  company: string;
  location: string;
  designation: string;
  techs: string[];
  responsibilities: string;
  _id: string;
};
export type Work = {
  currentStatus: string;
  previous: PreviousWork[];
};

export type AboutMeData = {
  _id: {
    $oid: string;
  };
  aboutMe: string;
  techs: Tech[];
  education: Education[];
  work: Work;
  strengths: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export interface Blog {
  _id: string;
  name: string;
  image: string;
  stack: string[];
  details: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface Project {
  _id: string;
  name: string;
  image: string;
  techs: string[];
  liveSite: string;
  githubClient: string;
  githubBackend: string;
  summary: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}
