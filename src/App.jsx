const App = () => {

  const cities = ['Dhaka', 'Sylhet', 'Rangpur', 'Barisal', 'Khulna']

  return (
    <div>
      <ul>
        {
          cities.map((city, index) => {
            return <li key={index}>{city}</li>
          })
        }
      </ul>
    </div>
  );
};

export default App;