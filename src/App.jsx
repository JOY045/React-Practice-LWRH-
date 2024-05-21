const App = () => {

  const status = true;

  if (status == true) {
    return (
      <div>
        <h1>Logged In</h1>
        <button>Logout</button>
      </div>
    )
  }

  else {
    return (
      <div>
        <h1>Logged Out</h1>
        <button>Login</button>
      </div>
    )
  }
};

export default App;