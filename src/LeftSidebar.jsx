import briefcase from "./assets/briefcase.svg";
import command from "./assets/command.svg";
import folder from "./assets/folder.svg";
import dashGrid from "./assets/grid.svg";
import illustration from "./assets/Illustration.png";
import logo from "./assets/logo.svg";
import phone from "./assets/phone.svg";
import settings from "./assets/settings.svg";
import users from "./assets/users.svg";

export const LeftSidebar = ({ open }) => {
  console.log("$$: ", open?.left);
  return (
    <aside
      className={`absolute z-10 inset-0 w-[25%] transition-all ${
        open?.left ? "" : "-translate-x-full"
      } xl:hidden flex flex-col bg-[#f9f9f9] justify-evenly py-8`}
    >
      <div className="brand flex px-6 pb-6">
        <span className="mr-4">
          <img src={logo} alt="logo" />
        </span>
        <h1 className="text-xl font-bold text-[#6956E5]">
          <a href="#">Teamify</a>
        </h1>
      </div>
      <nav className={`flow text-lg px-6 w-72 text-start`}>
        <ul className="font-medium text-[#878787] flow py-8 [--flow-space:2rem]">
          <li className="flex items-center text-[#6956E5]">
            <span className="mr-4">
              <img src={dashGrid} alt="grid" />
            </span>
            <a href="">Dashboard</a>
          </li>
          <li className="flex items-center">
            <span className="mr-4">
              <img src={command} alt="grid" />
            </span>
            <a href="">Teams</a>
          </li>
          <li className="flex items-center">
            <span className="mr-4">
              <img src={users} alt="grid" />
            </span>
            <a href="">Employees</a>
          </li>
          <li className="flex items-center">
            <span className="mr-4">
              <img src={briefcase} alt="grid" />
            </span>
            <a href="">Projects</a>
          </li>
        </ul>
        <div className="w-[218px] bg-[#878787] h-0.5 border "></div>
        <ul className="font-medium text-[#878787] flow [--flow-space:2rem]">
          <li className="flex items-center">
            <span className="mr-4">
              <img src={folder} alt="grid" />
            </span>
            <a href="">Meetings</a>
          </li>
          <li className="flex items-center">
            <span className="mr-4">
              <img src={phone} alt="grid" />
            </span>
            <a href="">Tasks</a>
          </li>
          <li className="flex items-center">
            <span className="mr-4">
              <img src={settings} alt="grid" />
            </span>
            <a href="">Settings</a>
          </li>
        </ul>
      </nav>
      <div className="grid place-items-center">
        <div>
          <img src={illustration} alt="thoughts" />
        </div>
      </div>
    </aside>
  );
};
