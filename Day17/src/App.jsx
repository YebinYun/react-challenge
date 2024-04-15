import "./App.css";
import { useRef, useReducer, useCallback, createContext, useMemo } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

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

export const contentStateContext = createContext();
export const contentDispatchContext = createContext();

function App() {
  const [contacts, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(2);

  const onCreate = useCallback((title, contact) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        title,
        contact,
      },
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "REMOVE",
      targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />

      <contentStateContext.Provider value={contacts}>
        <contentDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </contentDispatchContext.Provider>
      </contentStateContext.Provider>
    </div>
  );
}

export default App;
