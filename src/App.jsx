const App = () => {

  let marks = 81;

  return (
    <div>
      {marks > 80 ?
        <h1>Congratulations!</h1> :
       <h1>Sorry!</h1>}
    </div>
  );
};

export default App;