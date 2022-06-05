import React from 'react';
import './App.css';
import Hello from './components/hello';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Message from './components/message';
import Counter from './components/counter';
import FunctionClick from './components/functionClick';
import EventBind from './components/eventBind';
import ParentComponent from './components/parentComponent';
import UserGreeting from './components/userGreeting';
import NameList from './components/nameList';
import Form from './components/form';
import ParentComp from './components/parentComp';
import RefsDemo from './components/refsDemo';
import FocusInput from './components/focusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/portalDemo';
import Hero from './components/hero';
import ErrorBoundary from './components/errorBoundary';
import ClickCounter from './components/clickCounter';
import User from './components/user';
import Counter2 from './components/counter2';
import ClickCounter2 from './components/clickCounter2';
import ComponentC from './components/componentC';
import { UserProvider } from './useContext';
import PostList from './components/postList';
import PostForm from './components/postForm';

function App() {
  return (
    <div className='app'>
      {/* <Hello /> */}
      {/* <Greet name="Bruce">
        <p>This is Bruce</p>
      </Greet> */}
      {/* <Greet name="Clark" /> */}
      {/* <Greet name="Diana" /> */}
      {/* <Welcome name="Bruce">
        <p>This is Bruce</p>
      </Welcome> */}
      {/* <Welcome name="Clark" /> */}
      {/* <Welcome name="Diana" /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Form /> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <ClickCounter name="Benjamin" /> */}
      {/* <User name={
        isLoggedIn => isLoggedIn ? "Benjamin" : "Guest"
      } /> */}
      {/* <Counter2 render={
        (count, incrementCount) => <ClickCounter2 count={count} incrementCount={incrementCount} />
      } /> */}
      {/* <Counter2>
      {
        (count, incrementCount) => <ClickCounter2 count={count} incrementCount={incrementCount} />
      }
      </Counter2> */}
      {/* <UserProvider value="Benjamin">
        <ComponentC />
      </UserProvider> */}
      {/* <PostList /> */}
      <PostForm />
    </div>
  );
}

export default App;
