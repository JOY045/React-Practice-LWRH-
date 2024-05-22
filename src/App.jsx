const App = () => {

  const postFormData = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={postFormData}>
        <input type="text" placeholder="name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;