import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
