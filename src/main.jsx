import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ErrorPage from './component/ErrorPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditContact from './component/EditContact.jsx';
import AddContact from './component/AddContact.jsx';
import DeleteContact from './component/DeleteContact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/edit/:id",
    element: <EditContact />,
  },
  {
    path: "/add",
    element: <AddContact />,
  },
  {
    path: "/delete/:id",
    element: <DeleteContact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.StrictMode>,
)