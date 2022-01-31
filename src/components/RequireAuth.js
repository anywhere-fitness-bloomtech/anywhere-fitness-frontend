import { Navigate } from 'react-router-dom';

function RequireAuth({ children, redirectTo = '/login' }) {
  if (!localStorage.getItem('token')) {
    return <Navigate to={redirectTo} />;
  }

  return children;
}

export default RequireAuth;
