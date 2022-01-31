import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import FitnessClass from './FitnessClass';
import Register from './Register';

function App() {
  return (
    <div>
      <header>
        <h1>Anywhere Fitness</h1>
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
          <Link to='/class'>Class</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/class' element={<FitnessClass />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
