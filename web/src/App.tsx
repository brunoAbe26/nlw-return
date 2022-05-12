import "./App.css";
import { Widget } from "./components/Widget";
import "./global.css";

interface ButtonProps {
  text?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className="bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">
      {props.text ?? "Default"}
    </button>
  );
};

function App() {
  return <Widget />;
}

export default App;
