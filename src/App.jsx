const App = () => {

  const isLoginStatus = true

  return (
    <div>
      {
        isLoginStatus == true ?
          <button>Logout</button> :
          <button>Login</button>
      }
    </div>
  )

};

export default App;