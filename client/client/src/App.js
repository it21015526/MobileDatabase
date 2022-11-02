import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {

  useEffect(() => {

    axios.get("http://localhost:8080/BusTrip").then(res =>{
      console.table(res.data.Routes)
    }).catch(er =>{
      console.log(er)
    })

  }, [])


  return (
    <div className="App">
    </div>
  );
}

export default App;
