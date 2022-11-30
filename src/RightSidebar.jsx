import employee from "./assets/employee.png";

const RightSidebar = ({ open }) => {
  return (
    <div
      className={`flex flex-col gap-y-16 absolute z-10 right-0 top-0 bottom-0 w-[40%] lg:w-[35%]  bg-[#f9f9f9] p-6 transition-all ${
        open?.right ? "" : "translate-x-full"
      } xl:hidden`}
    >
      <section className="flex flex-col gap-4 justify-between items-center">
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
    </div>
  );
};

export default RightSidebar;
