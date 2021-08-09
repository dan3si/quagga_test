import Quagga from 'quagga'
import React,{ useEffect } from 'react';

function App() {
  useEffect(() => {
    Quagga.init({
      inputStream : {
        name : "Live",
        type : "LiveStream",
        target: document.querySelector('#root')
      },
      decoder : {
        readers : ["code_128_reader"]
      }
    }, function(err) {
        if (err) {
            console.log(err);
            return
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
    })
    
    Quagga.onDetected((data) => {
      console.log(data)
    })
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
