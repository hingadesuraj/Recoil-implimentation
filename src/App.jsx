import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { todosAtomFamily } from "./atoms";
 

// fetch todo according to passed id
function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={1} />
      <Todo id={1} />
     
    </RecoilRoot>
  );
}

function Todo({id}) {
   
  const currentTodo = useRecoilValue(todosAtomFamily(id))
  return <>
  {currentTodo.title}
  <br />
  {currentTodo.description}
  <br />
  </>;
}

export default App;
