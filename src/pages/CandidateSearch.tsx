import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';




const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

  useEffect(() => {

    const fetchCandidates = async () => {
      const result = await searchGithub();
      
 
      const candidatePromises = result.map((candidate: { login: string }) => searchGithubUser(candidate.login));
    
      const candidateDetails = await Promise.all(candidatePromises);
      
      result.forEach((candidate: Candidate, index: number) => {
        candidate.avatar_url = candidateDetails[index].avatar_url;
        candidate.name = candidateDetails[index].name;
        candidate.login = candidateDetails[index].login;
        candidate.html_url = candidateDetails[index].html_url;
        candidate.bio = candidateDetails[index].bio;
        candidate.location = candidateDetails[index].location;
        candidate.email = candidateDetails[index].email;
        candidate.company = candidateDetails[index].company ? candidateDetails[index].company : 'N/A';
      });
      
      setCandidates(result);
      setCurrentCandidate(result[0]);
    };
    
    /*
    const fetchCandidates = async () => {
      const result = await searchGithub();
      const candidatePromises = result.map((candidate: ) => searchGithubUser(candidate.login));
      const candidateDetails = await Promise.all(candidatePromises);
      result.forEach((candidate: , index: ) => {
        candidate.avatar_url = candidateDetails[index].avatar_url;
        candidate.name = candidateDetails[index].name;
        candidate.login = candidateDetails[index].login;
        candidate.html_url = candidateDetails[index].html_url;
        candidate.bio = candidateDetails[index].bio;
        candidate.location = candidateDetails[index].location;
        candidate.email = candidateDetails[index].email;
        candidate.company = candidateDetails[index].company

          ? candidateDetails[index].company
          : 'N/A';
      }
      );
      setCandidates(result);
      setCurrentCandidate(result[0]);
    };
    */

    fetchCandidates();
  }, []);

  const handleAccept = () => {
    if (currentCandidate) {
      setPotentialCandidates([...potentialCandidates, currentCandidate]);
      showNextCandidate();
    }
  };

  const handleReject = () => {
    showNextCandidate();
  };

  const showNextCandidate = () => {
    const nextIndex = candidates.indexOf(currentCandidate!) + 1;
    if (nextIndex < candidates.length) {
      setCurrentCandidate(candidates[nextIndex]);
    } else {
      setCurrentCandidate(null);
    }
  };

  return (
    <div>
      {currentCandidate ? (
        <div>
          <img src={currentCandidate.avatar_url} alt={currentCandidate.name} />
          <h2>{currentCandidate.name}</h2>
          <p>{currentCandidate.login}</p>
          <p>{currentCandidate.location}</p>
          <p>{currentCandidate.email}</p>
          <p>{currentCandidate.company}</p>
          <a href={currentCandidate.html_url}>Profile</a>
          <button onClick={handleAccept}>+</button>
          <button onClick={handleReject}>-</button>
        </div>
      ) : (
        <p>No more candidates available</p>
      )}
      <h3>Potential Candidates</h3>
      {potentialCandidates.length > 0 ? (
        <ul>
          {potentialCandidates.map((candidate, index) => (
            <li key={index}>
              <img src={candidate.avatar_url} alt={candidate.name} />
              <h2>{candidate.name}</h2>
              <p>{candidate.login}</p>
              <p>{candidate.location}</p>
              <p>{candidate.email}</p>
              <p>{candidate.company}</p>
              <a href={candidate.html_url}>Profile</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No candidates have been accepted</p>
      )}
    </div>
  );
};


export default CandidateSearch;

