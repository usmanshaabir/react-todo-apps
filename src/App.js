import React, { useContext } from 'react';
import AuthContextProvider, { AuthContext } from 'context/AuthContext';
import './App.scss';
import PublicRoutes from 'pages/PublicRoutes';



function App() {
  return (
    <AuthContextProvider>
      <AppContent />
    </AuthContextProvider>
  );
}

function AppContent() {
  const { isAppLoading } = useContext(AuthContext);

  if (isAppLoading) {
    // return (
    //   <div className="loader-container">
    //     <span className="loader"></span>
    //   </div>
    // );
  }

  return <PublicRoutes />;
}

export default App;
