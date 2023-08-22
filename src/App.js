import "./App.css";
import { SplitScreen } from "./SplitScreen";

const LeftHandedComponent =()=> {
return <h1 style={{backgroundColor:'green'}}>Left!</h1>
}

const RightHandedComponent =()=> {
  return <h2 style={{backgroundColor:'blue'}}>Right!</h2>
}

function App() {
  return (
  <SplitScreen
  left={LeftHandedComponent} 
  right={RightHandedComponent}
  leftWeight={1}
  rightWeight={3}
  />
  )
}

export default App;
