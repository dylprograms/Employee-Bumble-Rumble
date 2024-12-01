# Employee-Bumble-Rumble

## Description  

The Employee Bumble Rumble deployed at [render](https://employee-bumble-rumble.onrender.com) allows users to review, accept, and reject potential candidates by displaying one candidate at a time. Accepted candidates are saved to a persistent list, ensuring the information remains available even after a page reload. Built with React, TypeScript, and Vite, the app provides an intuitive and efficient user experience.  

Key Features:  
- Displays candidates with details like name, username, location, avatar, email, profile URL, and company.  
- Allows users to save candidates or skip them.    
- Saves accepted candidates persistently for future reference.  
- Displays a list of saved candidates, or an appropriate message if none are saved.  

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  

## Table of Contents  
* [Installation](#installation)  
* [Usage](#usage)  
* [Contribution](#contribution)  
* [Tests](#tests)  
* [License](#license)  
* [Questions](#questions)  

## Installation  

1. Clone this repository:  
   ```bash  
   git clone https://github.com/dylprograms/Employee-Bumble-Rumble.git 
Navigate to the project directory:
bash
Copy code
cd candidate-search-app  
Install dependencies:

npm install  
Usage
Start the development server:

npm run dev  
Open the application in your browser (default is http://localhost:3000).
Application Functionality
Candidate Search Page:

Displays one candidate's information, including name, username, location, avatar, email, profile URL, and company.
+ Button: Saves the candidate to the list of potential candidates and displays the next candidate.
- Button: Skips the current candidate and displays the next one without saving.
Displays a message when no more candidates are available to review.
Potential Candidates Page:

Displays the list of saved candidates with their details.
Persists the list of saved candidates across page reloads.


## Contribution
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch:

git checkout -b feature/YourFeature  
Commit your changes:

git commit -m 'Add Your Feature'  
Push to your branch:

git push origin feature/YourFeature  
Open a pull request.
Tests
To run tests:

npm run test  
Ensure all features are working as expected.

## License
This project is licensed under the MIT license.

## Questions
For questions, feel free to reach out via GitHub or email:

GitHub: [dylprograms](ttps://github.com/dylprograms)
Email: dlyoungworking@gamil.com