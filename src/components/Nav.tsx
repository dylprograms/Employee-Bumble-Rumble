
  // TODO: Add necessary code to display the navigation bar and link between the pages
  import { Link } from 'react-router-dom';

  const Nav: React.FC = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Candidate Search</Link>
          </li>
          <li>
            <Link to="/SavedCandidates">Saved Candidates</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Nav;