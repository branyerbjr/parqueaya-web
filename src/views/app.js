import '../styles/App.css'
import HeadNav from '../components/HeadNav';
import FloatingMenu from '../components/FloatingMenu';
import Card from '../components/card';

function App() {
  return (
    <div className="App">
      <HeadNav />
      <FloatingMenu />
      <div className="cards-container">
        
      </div>
    </div>
  );
}

export default App;