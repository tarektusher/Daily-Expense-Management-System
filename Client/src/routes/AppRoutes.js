import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import AddIncome from '../components/AddIncome'
import DashBoard from '../components/DashBoard';
import AddExpense from '../components/AddExpense';



export function AppRoutes() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      children: [
        {
          path: 'about',
          element: <AboutPage />,
        },
        {
          path : 'addincome',
          element : <AddIncome />,
        },
        {
          path : 'dashboard',
          element : <DashBoard />,
        },
        {
          path : 'addexpense',
          element : <AddExpense />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

