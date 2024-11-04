// TODO: Create an interface for the Candidate objects returned by the API

export interface Candidate {
 login: string; // name/username
 name: string; // full name
 avatar_url: string; // URL to the avatar image
 email: string; // email address
 location: string; // location
 company: string; // company
 html_url: string; // URL to the GitHub profile
 bio: string; // bio

}
