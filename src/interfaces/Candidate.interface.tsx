// TODO: Create an interface for the Candidate objects returned by the API

export interface Candidate {
    login: string | null;
    id: number | null;
    avatar_url: string | null;
    html_url: string | null;
    email: string | null;
    name: string | null;
    bio: string | null;
    company: string | null;
    location: string | null;
  }
  