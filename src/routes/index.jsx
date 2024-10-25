import React from "react";
import KeepAlive from "react-activation";
import { Navigate } from "react-router-dom";
import FinancialPlanner from "../pages/FinancialPlanner/index.jsx";
import Me from "../pages/Me/index.jsx";
import TodoList from "../pages/TodoList/index.jsx";
import Err from "../pages/Error/index.jsx";

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
      <KeepAlive cacheKey="financialPlanner">
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
