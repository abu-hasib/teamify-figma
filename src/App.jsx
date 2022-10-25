import React, { PureComponent, useState } from "react";
import "./App.css";
import { Sidebar } from "./Sidebar";
import searchIcon from "./assets/search.svg";
import bell from "./assets/bell.svg";
import avatar from "./assets/avatar.png";
import arrowDown from "./assets/arrow-down.svg";
import employee from "./assets/employee.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianAxis,
} from "recharts";

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
  return (
    <div className="flex flex-col gap-8 w-full p-8">
      <TopBar />
      <All />
    </div>
  );
};

const All = () => {
  const [open, setOpen] = useState(false);

  return (
    <main className="grid grid-cols-3 grid-rows-2 gap-8 h-full">
      <section className="h-[344px] border border-[hsla(220, 14%, 91%, 1)] rounded-[10px] p-6 text-start">
        <h2 className="text-lg font-bold">Teams Strength</h2>
        <div className="flex items-end justify-between h-1/2 my-8">
          <div className="text-center">
            <p>1</p>
            <p className="w-[65px] h-[21px] bg-[#FABE7A] rounded-t-lg"></p>
            <p>a</p>
          </div>
          <div className="text-center">
            <p>5</p>
            <p className="w-[65px] h-[77px] bg-[#F6866A] rounded-t-lg"></p>
            <p>b</p>
          </div>
          <div className="text-center">
            <p>3</p>
            <p className="w-[65px] h-[44px] bg-[#59E6F6] rounded-t-lg"></p>
            <p>c</p>
          </div>
          <div className="text-center">
            <p>10</p>
            <p className="w-[65px] h-[104px] bg-[#7661E2] rounded-t-lg"></p>
            <p>d</p>
          </div>
        </div>

        <div className="flex flex-wrap flex-col gap-4 h-16">
          <div className="text-[#828282]">
            <span className="bg-[#FABE7A] text-white rounded-[4px] w-7 h-[26px] px-2 py-0.5 mr-2">
              a
            </span>
            Marketing
          </div>
          <div className="text-[#828282]">
            <span className="bg-[#F6866A] text-white rounded-[4px] w-7 h-[26px] px-2 py-0.5 mr-2">
              b
            </span>
            HR
          </div>
          <div className="text-[#828282]">
            <span className="bg-[#59E6F6] text-white rounded-[4px] w-7 h-[26px] px-2 py-0.5 mr-2">
              c
            </span>{" "}
            Developers
          </div>

          <div className="text-[#828282]">
            <span className="bg-[#7661E2] text-white rounded-md w-7 h-[26px] px-2 py-0.5 mr-2">
              d
            </span>
            Design
          </div>
        </div>
      </section>
      <section className="h-[344px] border border-[hsla(220, 14%, 91%, 1)] rounded-[10px] p-6 text-start">
        <div className="flex justify-between items-end">
          <h2 className="text-lg font-bold">Employees</h2>
          <div className="flex items-center">
            <p className="font-semibold text-xs text-[#787486]">
              Aug 25-Sept 25
            </p>
            <span
              className={`transition-transform cursor-pointer ${
                open ? "rotate-180" : ""
              }`}
              onClick={() => setOpen(!open)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_168)">
                  <path
                    d="M6.99999 7.68367L9.88749 4.79617L10.7123 5.62101L6.99999 9.33334L3.28766 5.62101L4.11249 4.79617L6.99999 7.68367Z"
                    fill="#787486"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_168">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col h-full gap-10 mt-8">
            <div>
              <p>
                <span className="bg-[#6956E5] w-[10px] h-[10px] inline-block rounded-full mr-1"></span>
                Inactive
              </p>
              <p>254</p>
            </div>
            <div>
              <p>
                <span className="bg-[#FB896B] w-[10px] h-[10px] inline-block rounded-full mr-1"></span>
                Active
              </p>
              <p>3000</p>
            </div>
            <div>
              <p className=" text-[#787486]">
                <span className="bg-[#F8C07F] w-[10px] h-[10px] inline-block rounded-full mr-1"></span>
                Total
              </p>
              <p className="font-bold text-lg">3524</p>
            </div>
          </div>
          <div>
            <img src={employee} alt="employee" className="w-[215] h-[215]" />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4 h-[344px] justify-center items-center">
        <div className="grid place-items-center w-full h-[103px] bg-[#FFF0E6] rounded-lg py-2">
          <h3 className="text-xl font-bold">Top 10</h3>
          <p className="text-sm font-medium">Position in dribbble</p>
          <p className="text-xs text-[#787486] font-medium">
            20% Increase from Last Week
          </p>
        </div>
        <div className="grid place-items-center w-full h-[103px] bg-[#ECEAFE] rounded-lg py-2">
          <h3 className="text-xl font-bold">Top 10</h3>
          <p className="text-sm font-medium">Position in dribbble</p>
          <p className="text-xs text-[#787486] font-medium">
            20% Increase from Last Week
          </p>
        </div>
        <div className="grid place-items-center w-full h-[103px] bg-[#E5F7FF] rounded-lg py-2">
          <h3 className="text-xl font-bold">Top 10</h3>
          <p className="text-sm font-medium">Position in dribbble</p>
          <p className="text-xs text-[#787486] font-medium">
            20% Increase from Last Week
          </p>
        </div>
      </section>
      <section className="border border-[hsla(220, 14%, 91%, 1)] rounded-[10px] p-6 text-start col-span-2">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">Project Deliveries</h2>
          <div className="flex gap-10">
            <p className="text-[#787486]">
              <span className="bg-[#FB896B] w-[10px] h-[10px] inline-block rounded-full mr-1"></span>
              Achieved
            </p>
            <p className="text-[#787486]">
              <span className="bg-[#6956E5] w-[10px] h-[10px] inline-block rounded-full mr-1"></span>
              Target
            </p>
          </div>
        </div>
        <Chart />
      </section>
      <section className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">Notifications</h2>
          <a href="#" className="text-[#6956E5]">
            View all
          </a>
        </div>
        <div className="flex items-center gap-2 w-full h-[56px] bg-[#F9F9F9] rounded-lg p-2">
          <div className="w-[36px] h-[36px]">
            <img src={employee} alt="avatar" />
          </div>
          <div className="text-start">
            <p className="text-xs font-medium">Ellie joined team developers</p>
            <p className="text-[10px] text-[#708099]">
              04 April, 2021 | 04:00 PM
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full h-[56px] bg-[#F9F9F9] rounded-lg p-2">
          <div className="w-[36px] h-[36px]">
            <img src={employee} alt="avatar" />
          </div>
          <div className="text-start">
            <p className="text-xs font-medium">Jenny joined team HR</p>
            <p className="text-[10px] text-[#708099]">
              04 April, 2021 | 04:00 PM
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full h-[56px] bg-[#F9F9F9] rounded-lg p-2">
          <div className="w-[36px] h-[36px]">
            <img src={employee} alt="avatar" />
          </div>
          <div className="text-start">
            <p className="text-xs font-medium">
              Adam got employee of the month
            </p>
            <p className="text-[10px] text-[#708099]">
              04 April, 2021 | 04:00 PM
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full h-[56px] bg-[#F9F9F9] rounded-lg p-2">
          <div className="w-[36px] h-[36px]">
            <img src={employee} alt="avatar" />
          </div>
          <div className="text-start">
            <p className="text-xs font-medium">Robert joined team design</p>
            <p className="text-[10px] text-[#708099]">
              04 April, 2021 | 04:00 PM
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full h-[56px] bg-[#F9F9F9] rounded-lg p-2">
          <div className="w-[36px] h-[36px]">
            <img src={employee} alt="avatar" />
          </div>
          <div className="text-start">
            <p className="text-xs font-medium">Jack joined team design</p>
            <p className="text-[10px] text-[#708099]">
              04 April, 2021 | 04:00 PM
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="w-[122px] h-max bg-white shadow-2xl p-4">
        <p className="label">{`${payload[0].value} Projects`}</p>
        <p className="label">{`${payload[1].value} Projects`}</p>
      </div>
    );
  }

  return null;
}

const Chart = React.memo((props) => {
  const data = [
    {
      name: "Oct 2021",
      uv: 5.6,
      pv: 2,
      amt: 12,
    },
    {
      name: "Nov 2021",
      uv: 6.5,
      pv: 4,
      amt: 0,
    },
    {
      name: "Dec 2021",
      uv: 5.5,
      pv: 6,
      amt: 0,
    },
    {
      name: "Jan 2022",
      uv: 7,
      pv: 4,
      amt: 0,
    },
    {
      name: "Feb 2022",
      uv: 5,
      pv: 6,
      amt: 0,
    },
    {
      name: "Mar 2022",
      uv: 4.5,
      pv: 2,
      amt: 0,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={400}
        height={400}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="natural" dataKey="uv" stroke="#FB896B" />
        <Line type="natural" dataKey="pv" stroke="#6956E5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  );
});

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
class AChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

const TopBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex justify-between">
      <div className="text-start">
        <h1 className="font-bold text-2xl">Good Morning Anima</h1>
        <p>Hope you have a good day</p>
      </div>
      <div className="flex items-center justify-around w-1/4">
        <span className="w-6 h-6">
          <img src={searchIcon} alt="search" />
        </span>
        <span className="w-6 h-6 animate-[wiggle_1s_ease-in-out_infinite]">
          <img src={bell} alt="bell" />
        </span>
        <span className="w-12 h-12">
          <img src={avatar} alt="avatar" />
        </span>
        <span
          className={`cursor-pointer transition-transform ${
            open ? "rotate-180" : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          <img src={arrowDown} alt="arrow down" />
        </span>
      </div>
    </header>
  );
};

export default App;
