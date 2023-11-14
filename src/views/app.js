import '../styles/App.css'
import HeadNav from '../components/HeadNav';
import FloatingMenu from '../components/FloatingMenu';
import Card from '../components/card';

const cardData = [
  {
    image: 'URL_DE_LA_IMAGEN_1',
    mission: 'Mall Porongoche - AQP',
    placeName: 'ver',
  },
  {
    image: 'URL_DE_LA_IMAGEN_2',
    mission: 'Mall del sur - LIMA',
    placeName: 'ver',
  },
  {
    image: 'URL_DE_LA_IMAGEN_2',
    mission: 'Parque Lambramani - AQP',
    placeName: 'ver',
  },
  {
    image: 'URL_DE_LA_IMAGEN_2',
    mission: 'Real Plaza - AQP',
    placeName: 'ver',
  },
  // Agrega más datos de tarjetas según sea necesario
];

function App() {
  return (
    <div className="App">
      <HeadNav />
      <FloatingMenu />
      <div className="cards-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            mission={card.mission}
            placeName={card.placeName}
          />
        ))}
      </div>
    </div>
  );
}

export default App;