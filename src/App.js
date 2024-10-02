import React from 'react'
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';



function App() {
  return (
    <div className="App">
       <Greet  name="laddu">
        <p>Helloo how are you,what are you doing</p>
       </Greet>

       <Welcome  name= "biddu"/>
       <Hello />
       <Message />
    </div>
  );
}

export default App;
