/*

import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/cardCandidate';
import type { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [results, setResults] = useState<Candidate[]>([]);
  const [currentUser, setCurrentUser] = useState<Candidate>({
    id: null,
    login: null,
    email: null,
    html_url: null,
    name: null,
    bio: null,
    company: null,
    location: null,
    avatar_url: null,
  });
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const getSingleUser = async (user: string) => {
    const data: Candidate = await searchGithubUser(user);

    setCurrentUser(data);
  };

  const searchForUsers = async () => {
    const data: Candidate[] = await searchGithub();

    setResults(data);

    await getSingleUser(data[currentIdx].login || '');
  };

  const makeDecision = async (isSelected: boolean) => {
    if (isSelected) {
      let parsedCandidates: Candidate[] = [];
      const savedCandidates = localStorage.getItem('savedCandidates');
      if (typeof savedCandidates === 'string') {
        parsedCandidates = JSON.parse(savedCandidates);
      }
      parsedCandidates.push(currentUser);
      localStorage.setItem('savedCandidates', JSON.stringify(parsedCandidates));
    }
    if (currentIdx + 1 < results.length) {
      setCurrentIdx(currentIdx + 1);
      await getSingleUser(results[currentIdx + 1].login || '');
    } else {
      setCurrentIdx(0);
      await searchForUsers();
    }
  };

  useEffect(() => {
    searchForUsers();
    getSingleUser(currentUser.login || '');

  }, []);

  return (
    <>
      <h1>Candidate Search</h1>
      <CandidateCard potentialCandidate={currentUser} chooseCandidate={makeDecision} />
    </>
  );
};

export default CandidateSearch;
*/

import { useState, useEffect, useCallback } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/cardCandidate';
import type { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [results, setResults] = useState<Candidate[]>([]);
  const [currentUser, setCurrentUser] = useState<Candidate>({
    id: null,
    login: null,
    email: null,
    html_url: null,
    name: null,
    bio: null,
    company: null,
    location: null,
    avatar_url: null,
  });
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  // Wrap getSingleUser in useCallback to ensure it doesn't change on every render
  const getSingleUser = useCallback(async (user: string) => {
    const data: Candidate = await searchGithubUser(user);
    setCurrentUser(data);
  }, []);

  // Wrap searchForUsers in useCallback to stabilize it
  const searchForUsers = useCallback(async () => {
    const data: Candidate[] = await searchGithub();
    setResults(data);
    if (data.length > 0) {
      await getSingleUser(data[currentIdx].login || '');
    }
  }, [currentIdx, getSingleUser]);

  const makeDecision = async (isSelected: boolean) => {
    if (isSelected) {
      let parsedCandidates: Candidate[] = [];
      const savedCandidates = localStorage.getItem('savedCandidates');
      if (typeof savedCandidates === 'string') {
        parsedCandidates = JSON.parse(savedCandidates);
      }
      parsedCandidates.push(currentUser);
      localStorage.setItem('savedCandidates', JSON.stringify(parsedCandidates));
    }

    if (currentIdx + 1 < results.length) {
      setCurrentIdx(currentIdx + 1);
      await getSingleUser(results[currentIdx + 1].login || '');
    } else {
      setCurrentIdx(0);
      await searchForUsers();
    }
  };

  // Use useEffect to call searchForUsers and ensure it only runs once when the component mounts
  useEffect(() => {
    searchForUsers();
  }, [searchForUsers]); // Include searchForUsers as a dependency

  return (
    <>
      <h1>Candidate Search</h1>
      <CandidateCard potentialCandidate={currentUser} chooseCandidate={makeDecision} />
    </>
  );
};

export default CandidateSearch;
