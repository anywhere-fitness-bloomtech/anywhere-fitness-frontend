import { Routes, Route, Link } from 'react-router-dom';
// import RequireAuth from './RequireAuth';
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
          {/* TODO: Uncomment once backend authentication is working and delete the path above*/}
          {/* <Route
            path='/class'
            element={
              <RequireAuth>
                <FitnessClass />
              </RequireAuth>
            }
          /> */}
        </Routes>
      </main>
    </div>
    
  );
}

export default App;
