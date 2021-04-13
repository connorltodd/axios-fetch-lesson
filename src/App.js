import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [randomJoke, setRandomJoke] = React.useState({});

  function getRandomJoke() {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then(function (response) {
        // handle success
        setRandomJoke(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  return (
    <div className="App">
      <button onClick={getRandomJoke}>Click me to return a random joke</button>
      <h1>{randomJoke.setup}</h1>
      <p>{randomJoke.punchline}</p>
    </div>
  );
}

export default App;
