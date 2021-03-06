import "./App.css";
import { Header } from "./components/Header";
import { Light } from "./components/Light";

const points = [
  {
    id: 0,
    crdX: 4,
    crdY: 2,
    duration: 2,
    value: 25.01,
  },
  {
    id: 1,
    crdX: 8,
    crdY: 12,
    duration: 3,
    value: 18.75,
  },
  {
    id: 2,
    crdX: 12,
    crdY: 8,
    duration: 4,
    value: 7.18,
  },
  {
    id: 3,
    crdX: 16,
    crdY: 12,
    duration: 5,
    value: 22.1,
  },
  {
    id: 4,
    crdX: 24,
    crdY: 10,
    duration: 6,
    value: 24.78,
  },
  {
    id: 4,
    crdX: 24,
    crdY: 10,
    duration: 6,
    value: 30.12,
  },
];
function App() {
  return (
    <div className="bg-hero-pattern h-screen w-screen bg-cover">
      <Header />
      <div className="flex pt-[40%] mx-12">
        {points.map((item, key) => (
          <Light
            key={item.id}
            crdX={item.crdX}
            crdY={item.crdY}
            duration={item.duration}
            value={item.value}
          />
        ))}
      </div>
      {/* <Light /> */}
      {/* <img className="w-screen h-screen" src={backgroundImg} alt="background" /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="p-5">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link text-2xl font-bold underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
