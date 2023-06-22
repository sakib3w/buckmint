import { AiOutlineDashboard } from "react-icons/ai";

export const menus = [
  {
    id: "337fwedkf",
    menu: "all serial number",
    icon: <AiOutlineDashboard />,
    route: "/dashboard",
    permission: ["user", "admin"],
  },
  {
    id: "soihfiap83ww",
    menu: "add serial number",
    icon: <AiOutlineDashboard />,
    route: "/dashboard/addSerialNumber",
    permission: ["user", "admin"],
  },
];
