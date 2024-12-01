import { useEffect, useState } from 'react';
import SavedCandidate from './candidateSaver';
import type { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidateData = () => {
  const [idealCandidates, possibleChoices] = useState<Candidate[]>(
    []);
 useEffect(() => {
    
    const savedCandidates = localStorage.getItem('savedCandidates');
    let candidates: Candidate[] = [];

    if (typeof savedCandidates === 'string') {
      candidates = JSON.parse(savedCandidates);
    }

    possibleChoices(candidates);
  }, []);
  
  const dismissChoice = (id: number) => {
    let parsedCandidates: Candidate[] = [];
    const savedCandidates = localStorage.getItem('savedCandidates');
    if (typeof savedCandidates === 'string') {
      parsedCandidates = JSON.parse(savedCandidates);
    }
    parsedCandidates = parsedCandidates.filter(
      (person: Candidate) => person.id !== id
    );
    localStorage.setItem('savedCandidates', JSON.stringify(parsedCandidates));
    possibleChoices(parsedCandidates);
  };

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Company</th>
          <th>Email</th>
          <th>Bio</th>
          <th>Location</th>
          <th>dismiss</th>
        </tr>
      </thead>
      <tbody>
        {idealCandidates.map((candidate) => (
          <SavedCandidate
            key={candidate.id}
            candidate={candidate}
            removeCandidate={dismissChoice}
          />
        ))}
      </tbody>
    </table>
  );
};

export default SavedCandidateData;
