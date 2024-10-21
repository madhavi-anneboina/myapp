import React, { PureComponent } from 'react'
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
import LifecycleA from './components/LifecycleA';
import LifecycleB from './components/LifecycleB';
import FragementDemo from './components/FragementDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRInput from './components/FRInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterRenderProps from './components/CounterRenderProps';










function App() {
  return (
    <div className="App">
   {/* <ClickCounterTwo />
   <HoverCounterTwo />
    <User render = {(isLoggedIn) => isLoggedIn ? "Madhavi" : "Guest"}/> */}
    <CounterRenderProps >
    {(count,incrementCount) => (
       <ClickCounterTwo  count={count} incrementCount={incrementCount}/>
    )}
    </CounterRenderProps>
    <CounterRenderProps >
    {(count,incrementCount) => (
       <HoverCounterTwo  count={count} incrementCount={incrementCount}/>
    )}
    </CounterRenderProps>

   
    </div>
  );
}

export default App;
