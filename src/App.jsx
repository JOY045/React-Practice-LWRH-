const App = () => {
  return (
    <div>
      <h1 className="heading">Hello, I am React</h1>
      <input type="text" placeholder="Enter Your Name" />
      <button onClick={() => alert("Hello")}>Submit</button>
    </div>
  );
};

export default App;
