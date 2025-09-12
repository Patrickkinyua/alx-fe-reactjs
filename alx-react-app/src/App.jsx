import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';
function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="John Doe" email="25" bio="Software Developer" />
    </>
  );
}

export default App;
