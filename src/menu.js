import { RiBookReadFill } from "react-icons/ri";
import { AiFillDashboard } from "react-icons/ai";
const MenuList = [
  {
    Id: 1,
    Name: "Dashboard",
    Icon: <AiFillDashboard />,
    Path: "/",
  },
  {
    Id: 2,
    Name: "Survey",
    Icon: <RiBookReadFill />,
    Path: "/survey",
  },
];

export { MenuList };
