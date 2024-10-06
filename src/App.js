import React from 'react'
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css'
import Form from './components/Form';






function App() {
  return (
    <div className="App">
      {/* <h1 className='error'> Heloo Madhavi Error </h1>
      <h1 className={styles.sucess}> Heloo Madhavi Success </h1> */}
       {/* <Greet  name="laddu">
        <p>Helloo how are you,what are you doing</p>
       </Greet>

       <Welcome  name= "biddu" heroName="latha"/>
       <Hello />
       <Message />
       <Counter />
       <FunctionClick /> */}
       {/* <EventBind />
       <ParentComponent /> */}
       {/* <UserGreeting /> */}
       {/* <NameList /> */}
       {/* <StyleSheet  primary = {false}/> */}
       <Form />

    </div>
  );
}

export default App;
