import Me from "../pages/Me";
import TodoList from "../pages/TodoList";
import Err from "../pages/Error/index.jsx";
import KeepAlive from "react-activation";
import { Navigate } from "react-router-dom";
import FinancialPlanner from "../pages/FinancialPlanner/index.jsx";

const routerMap = [
  {
    path: "/me",
    element: (
      <KeepAlive cacheKey="Me">
        <Me />
      </KeepAlive>
    ),
  },
  {
    path: "/todolist",
    element: (
      <KeepAlive cacheKey="todoList">
        <TodoList />
      </KeepAlive>
    ),
  },
  {
    path: "/financialPlanner",
    element: (
      <KeepAlive cacheKey="todoList">
        <FinancialPlanner />
      </KeepAlive>
    ),
  },
  {
    path: "/",
    element: <Navigate to="/todolist" />,
  },
  {
    path: "*",
    element: <Err to="/todolist" />,
  },
];

export default routerMap;
