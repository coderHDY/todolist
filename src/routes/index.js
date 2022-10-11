import Me from '../pages/Me';
import TodoList from '../pages/TodoList';
import Err from '../pages/Error/index.jsx';
import { Navigate } from "react-router-dom";


const routerMap = [
  {
    path: "/me",
    element: <Me />,
  },
  {
    path: "/todolist",
    element: <TodoList />,
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
