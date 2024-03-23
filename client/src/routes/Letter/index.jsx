import Show from "../../pages/Admin/Letters/Show/";
import PayOff from "../../pages/Admin/Letters/PayOff/";

const Letter = [
  {
    path: "/admin/letters/show/:uid",
    element: <Show/>,
  },
  {
    path: "/admin/letters/payoff/:uid",
    element: <PayOff/>,
  },
];

export { Letter };
