import React from 'react'
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';


function App() {
  return (
    <div className="App">
       <Greet  name="laddu">
        <p>Helloo how are you,what are you doing</p>
       </Greet>

       <Welcome  name= "biddu"/>
       <Hello />
    </div>
  );
}

export default App;
