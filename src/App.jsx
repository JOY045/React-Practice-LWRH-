const App = () => {

  const isLoginStatus = false

  return (
    <div>
      {(() => {
        if (isLoginStatus == true) {
          return (
            <button>Logout</button>
          )
        }
        else {
          return (
            <button>Login</button>
          )
        }
      })()}
    </div>
  )

};

export default App;