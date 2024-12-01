
import type { Candidate } from '../interfaces/Candidate.interface';


// To be rendered in the SavedCandidateList
type SavedCandidateProps = {
  candidate: Candidate;
  removeCandidate: (id: number) => void;
};
const SavedCandidate = ({
  candidate,
  removeCandidate,
}: SavedCandidateProps) => {
  return (
    <tr>
      {candidate ? (
        <>
          <td>
            <img
              src={`${candidate.avatar_url}`}
              alt={`Profile of ${candidate.login}`}
              style={{
                width: '75px',
                borderRadius: '15px',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </td>
          <td>
            <a href={candidate.html_url || ''} target='_blank' rel='noreferrer'>
              <h3>
                {candidate.name}
                <br />
                <em>({candidate.login})</em>
              </h3>
            </a>
          </td>
          <td>{candidate.location}</td>
          <td>
            <a href={`${candidate.email}`}>{candidate.email}</a>
          </td>
          <td>{candidate.company}</td>
          <td>
            <div style={{ maxHeight: '65px', overflowY: 'scroll' }}>
              {candidate.bio}
            </div>
          </td>
          <td>
            <button
              style={{
                backgroundColor: '#d9534f',
                border: 'none',
                borderRadius: '50%',
                marginLeft: '35%',
                marginRight: '35%',
                color: '#fff',
                width: '50px',
                height: '50px',
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}
              onClick={() => removeCandidate(candidate.id || 0)}
            >
              -
              </button>
          </td>
        </>
      ) : (
        <h2>No Candidates yet!</h2>
      )}
    </tr>
  );
};

export default SavedCandidate;