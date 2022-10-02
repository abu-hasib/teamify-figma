import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import spotlight from "./assets/thoughts.png";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App flex h-screen">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

const Dashboard = () => {
  return <h1 className="text-3xl font-bold underline">Dashboard</h1>;
};
const Sidebar = () => {
  return (
    <aside className="flex flex-col sidebar justify-evenly">
      <div className="brand">
        <a href="#">Teamify</a>
      </div>
      <nav className={` flow text-lg px-6  h-screen w-72 text-start `}>
        <ul className="flow py-8">
          <li>
            <a href="">Dashboard</a>
          </li>
          <li>
            <a href="">Teams</a>
          </li>
          <li>
            <a href="">Employees</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
        </ul>
        <ul className="flow">
          <li>
            <a href="">Meetings</a>
          </li>
          <li>
            <a href="">Tasks</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
        </ul>
      </nav>
      <div className="bg-purple-600 h-44">
        <div>
          <div>
            <img src={spotlight} alt="thoughts" />
          </div>
          <input type="text" />
        </div>
      </div>
    </aside>
  );
};

export default App;
