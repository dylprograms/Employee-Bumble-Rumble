
import { Candidate } from '../interfaces/Candidate.interface';

interface CandidateProps {
  potentialCandidate: Candidate;
  chooseCandidate: (selected: boolean) => void;
}

const CardCandidate = ({ potentialCandidate, chooseCandidate }: CandidateProps) => {
  return (
    <div
      style={{
        backgroundColor: '#000044',
        color: '#fff',
        width: '400px',
        margin: '20px auto',
        borderRadius: '10px',
        overflow: 'hidden',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <img
        src={potentialCandidate.avatar_url || ''}
        alt={`${potentialCandidate.name}'s avatar`}
        style={{
          width: '100%',
          height: 'auto',
          borderBottom: '2px solid #fff',
        }}
      />
      <div
        style={{
          padding: '15px',
        }}
      >
        <h3 style={{ fontSize: '1.5rem', margin: '0 0 10px' }}>{potentialCandidate.name || 'Unknown'}</h3>
        <p style={{ margin: '5px 0', fontStyle: 'italic' }}>({potentialCandidate.login})</p>
        <p style={{ margin: '5px 0' }}>Location: {potentialCandidate.location || 'N/A'}</p>
        <p style={{ margin: '5px 0' }}>
          Email:{' '}
          <a
            href={`mailto:${potentialCandidate.email || ''}`}
            style={{ color: '#1e90ff', textDecoration: 'none' }}
          >
            {potentialCandidate.email || 'N/A'}
          </a>
        </p>
        <p style={{ margin: '5px 0' }}>Company: {potentialCandidate.company || 'N/A'}</p>
        <p style={{ margin: '10px 0' }}>Bio: {potentialCandidate.bio || 'No bio available.'}</p>
        <a
          href={potentialCandidate.html_url || '#'}
          style={{
            display: 'inline-block',
            marginTop: '10px',
            color: '#1e90ff',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          View Profile
        </a>
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <button
            onClick={() => chooseCandidate(false)}
            style={{
              backgroundColor: '#d9534f',
              border: 'none',
              borderRadius: '50%',
              color: '#fff',
              width: '50px',
              height: '50px',
              fontSize: '1.5rem',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            -
          </button>
          <button
            onClick={() => chooseCandidate(true)}
            style={{
              backgroundColor: '#5cb85c',
              border: 'none',
              borderRadius: '50%',
              color: '#fff',
              width: '50px',
              height: '50px',
              fontSize: '1.5rem',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCandidate;
