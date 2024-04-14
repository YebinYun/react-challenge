import './App.css'
import { useRef, useState } from 'react'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'
import { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "REMOVE":
      return state.filter((it) => it.id !== action.targetId);
    default:
      return state;
  }
};

const mockData = [
  {
    id: 0,
    title: "이정환",
    content: "test@test.com",
  },
  {
    id: 1,
    title: "한입스튜디오",
    content: "test2@test.com",
  },
];

function App() {
  const [contacts, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(2);

  const onCreate = (title, contact) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        title,
        contact,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "REMOVE",
      targetId,
    });
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List contacts={contacts} onDelete={onDelete} />
    </div>
  );
}

export default App
