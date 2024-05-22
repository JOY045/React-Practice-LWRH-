import Hero from './components/Hero';

const App = () => {

  const btnClick = () => {
    alert("Say Hello")
  }

  return (
    <div>
      <Hero childBtnClick = {btnClick} />
    </div>
  )

};

export default App;