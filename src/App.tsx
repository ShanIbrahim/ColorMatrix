import ColorMatrix from "./ColorMatrix";
import './App.css';

const data = [
  [1, 2, 3],
  [4, 5],
  [7, 8, 9],
];

function App() {
  return (
    <div className="App">
      <ColorMatrix data={data} />
    </div>
  );
}

export default App;
