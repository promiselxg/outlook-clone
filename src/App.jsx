import MiddleHeader from './components/Header/Middle';
import TopHeader from './components/Header/Top';
import NavBar from './components/Sidebar/NavBar';

function App() {
  return (
    <>
      <TopHeader />
      <div className="flex">
        <NavBar />
        <MiddleHeader />
      </div>
    </>
  );
}

export default App;
