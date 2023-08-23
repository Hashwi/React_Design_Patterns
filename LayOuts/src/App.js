import "./App.css";
import { SplitScreen } from "./SplitScreen";

const LeftHandedComponent = ({name}) => {
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
};

const RightHandedComponent = ({message}) => {
  return <p style={{ backgroundColor: "blue" }}>{message}!</p>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandedComponent name= 'Hash'/>
      <RightHandedComponent message='Hello'  />
    </SplitScreen>
  );
}

export default App;
