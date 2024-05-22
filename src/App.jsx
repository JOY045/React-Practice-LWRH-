import Hero from './components/Hero';

const App = () => {

  const items = {
    name: "Shoeb",
    age: 24,
    address: {
      city: "London",
      country: "UK"
    }
  }

  return (
    <div>
      <Hero item = {items}/>
    </div>
  )

};

export default App;