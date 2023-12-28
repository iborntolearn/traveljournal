import logo from './logo.svg';
import './App.css';
import Card from './components/card'
import data from './data'
import Navbar from './components/navbar';
import Footer from './components/footer';
function App() {
  const cards = data.map((card)=> {
    return <Card 
    key={card.id}
    {...card}
    />
  })
  return (
    <div className='App'>
      <Navbar />
      <section className='cards-list'>{cards}</section>
      <Footer />
    </div>
  );
}

export default App;
