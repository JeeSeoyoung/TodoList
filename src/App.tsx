import './App.css';
import * as ReactDOM from "react-dom";
import { useEffect,useState } from 'react';
import TodoApp from './component/TodoApp';
import styled from 'styled-components';
// import {TodoList} from './component/TodoList';



function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
