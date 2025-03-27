import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";

import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import {Country} from "./pages/Country";



const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
     children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"about",
        element:<About/>,
      },
      {
        path:"contact",
        element:<Contact/>,
      },
      {
        path:"country",
        element:<Country/>,
      },
     ],
  },
  
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};

export default App;