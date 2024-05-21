const App = () => {

  const isLoggedIn = true

  switch (isLoggedIn) {
    case true:
      return <button>Logout</button>;
    case false:
      return <button>Login</button>;
    default:
      return null;
  }

};

export default App;