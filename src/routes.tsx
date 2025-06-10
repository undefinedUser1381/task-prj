import { NavLink, type RouteObject } from "react-router";
import Activities from "./pages/activities/ActivitiesPage";
import Aims from "./pages/aims/AimsPage";
import Plans from "./pages/plans/PlansPage";

const routes: RouteObject[] = [
  { path: "/", element: <NavLink to={"aims"}>رفتن به صفحات</NavLink> },
  { path: "activities", element: <Activities /> },
  { path: "aims", element: <Aims /> },
  { path: "plans", element: <Plans /> }
];

export default routes;
