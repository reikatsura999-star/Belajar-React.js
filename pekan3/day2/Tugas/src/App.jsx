import ShowHiddeText from "./components/ShowHiddeText";
import SwitchButton from "./components/SwitchButton";
import PostViwer from "./components/PostViwer";
import "./App.css";
import CounterComponent from "./components/CountComponent";
import FormComponent from "./components/formComponent";
import FormForlocal from "./components/FormForLocal";

function App() {
 
  return (
    <div>
      <h1>Demo useToggle</h1>
      <ShowHiddeText />
      <br />
      <SwitchButton />

      <hr />
        <PostViwer exampleId={2}/>
      <hr />
      <CounterComponent/>
      <hr />
      <FormComponent/>
      <hr />
      <FormForlocal/>
    
    </div>
  );
}

export default App;
