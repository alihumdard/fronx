import Serviceweb from "../../pages/components/Service-detail/Service-web";
import Home from "../../pages/Home";
import OverOns from "../../pages/OverOns";
import Service from "../../pages/Service";

export const publicRoutes = [
  {
    path: "/",
    element: Home, 
  },
  {
    path: "/services",
    element: Service, 
  },
  {
    path: "/over-ons",
    element: OverOns, 
  },
    {
    path: "/web-development",
    element: Serviceweb, 
  },
];
