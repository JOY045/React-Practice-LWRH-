const loginStatusButton = (status) => {
  if (status == true) {
    return (
      <button>Logout</button>
    )
  }
  else {
    return (
      <button>Login</button>
    )
  }
}


const App = () => {

  // if (status == true) {
  //   return (
  //     <div>
  //       <h1>Logged In</h1>
  //       <button>Logout</button>
  //     </div>
  //   )
  // }

  // else {
  //   return (
  //     <div>
  //       <h1>Logged Out</h1>
  //       <button>Login</button>
  //     </div>
  //   )
  // }

  return (
    <div>
      <h1>Login Status</h1>
      {loginStatusButton(true)}
    </div>
  )

};

export default App;