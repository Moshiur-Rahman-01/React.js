import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from './Extra file/Navbar/Navbar.jsx';
import Root from './Extra file/Root/Root.jsx';
import Homepage from './Extra file/Homepage.jsx';
import Page1 from './Extra file/Page1.jsx';
import Page2 from './Extra file/Page2.jsx';
import Page3 from './Extra file/Page3.jsx';
import subPage from './subPage.jsx';
import ErrorPage from './Extra file/Root/ErrorPage.jsx';

// system-2
const page2Promise = fetch('fakeApi.json').then(res => res.json());

const router = createBrowserRouter([
  // Beginner level: 1
  // {
  //   path: "/",
  //   element: <h1>Home Page</h1>,
  // },
  // {
  //   path: 'page1',
  //   element: <h1>This is page 1</h1>
  // },
  // {
  //   path: 'page2',
  //   element: <Navbar/>
  // },
  // {
  //   path: 'page3',
  //   Component: Navbar
  // }

  // Beginner level: 2
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: '/',
        Component: Homepage,
      },
      {
        path: "page1",
        // system-1
        loader: () => fetch("fakeApi.json"),
        Component: Page1,
      },
      {
        path: "page2",
        element: (
          // system-2
          <Suspense fallback={<h1>Loading....</h1>}>
            <Page2 page2Promise={page2Promise}></Page2>
          </Suspense>
        ),
        // Component: Page2
      },
      {
        path: "page3",
        Component: Page3,
      },
      // dynamic path
      {
        path: "page1/:page11",
        // loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
        loader: () => fetch("fakeApi.json"),
        Component: subPage,
      },
      // {
      //   path: '*',
      //   element: <ErrorPage></ErrorPage>
      // }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
