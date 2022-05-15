import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const url = "https://api.adviceslip.com/advice";
  const [data, setdata] = useState();
  const fetchData = () => {
    axios
      .get(url)
      .then((response) => {
        const  advice = response.data.slip.advice;
        setdata(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };
//which is run at every time this component is render 
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="content">
        <h1>{data}</h1>
      </div>
      <button onClick={fetchData}>Get Me Quote</button>
    </div>
  );
}

export default App;
