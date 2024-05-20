const App = () => {

  let marks = 90;

  return (
    <div>
      {(() => {
          if (marks >= 90) {
            return "A+";
          } else if (marks >= 80) {
            return "A";
          } else if (marks >= 70) {
            return "B";
          } else if (marks >= 60) {
            return "C";
          } else if (marks >= 50) {
            return "D";
          } else if (marks >= 40) {
            return "E";
          } else if (marks >= 30) {
            return "F";
          } else {
            return "Fail";
          }
        })()}
    </div>
  );
};

export default App;