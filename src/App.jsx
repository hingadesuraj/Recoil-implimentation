import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { todosAtomFamily } from "./atoms";
import { useEffect } from "react";
 

// fetch todo according to passed id
function App() {
  return (
    <RecoilRoot>
      <UpdateComponent/>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={1} />
      <Todo id={1} />
    </RecoilRoot>
  );
}


function UpdateComponent(){
  const updateTodo =  useSetRecoilState(todosAtomFamily(2));

  useEffect(()=>{
      setTimeout(()=>{
        updateTodo({
          id:"2",
          title:"new Todo",
          description:"new Todo"
        })
      },5000)
  },[])
  return <>
    <div></div>
  </>
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
