import {
  dashboardItemsOne,
  dashboardItemsTwo,
} from "../../Constants/Constants";
import { Divider } from "antd";
import { Link, Outlet } from "react-router-dom";
import { DashboardLogo } from "../../assets";
import { useState } from "react";

const Dashboard: React.FC = () => {

    const [currentlySelected, setCurrentlySelected]= useState<number | null>(null)

  return (
    <div className="flex mr-5">
      <div className=" w-[190px] h-screen bg-transparent p-4">
        <div className=" flex items-center gap-3">
            <img src={DashboardLogo} alt="" />
            <h1 className="text-bold text-2xl">Dashboard</h1>
        </div>
        <Divider/>
        <ul className=" flex flex-col gap-3">
          {dashboardItemsOne.map((item, index) => {
            return (
              <Link to={item.link!}>
                <li className={`flex items-center transition-all ${item.id == currentlySelected? "bg-violet-500": "bg-none"} rounded-md px-4 py-2 gap-3`} key={index} onClick={()=> setCurrentlySelected(item.id)}>
                  {item.icon}
                  {item.label}
                </li>
              </Link>
            );
          })}
        </ul>
        <Divider />
        <ul className=" flex flex-col gap-3">
          {dashboardItemsTwo.map((item, index) => {
            return (
                <li className={`flex items-center transition-all ${item.id == currentlySelected? "bg-violet-500": "bg-none"} rounded-md px-4 py-2 gap-3`} key={index} onClick={()=> setCurrentlySelected(item.id)}>
                {item.icon}
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <Outlet/>
      </div>

      
    </div>
  );
};

export default Dashboard;
