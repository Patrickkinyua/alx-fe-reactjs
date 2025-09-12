import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';
function App() {
  return (
    <>
      <Header />
      
      <Footer />
      <UserProfile name="John Doe" Age="25" bio="Software Developer" />
    </>
  );
}

export default App;
