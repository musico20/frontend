import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/landing-page/LandingPage';
import Auth from './pages/auth/Auth';
import Dashboard from './pages/dashboard/Dashboard';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
	},
	{
		path: "/signup/all",
		element: <Auth />
	},
	{
		path: "/dashboard",
		element: <Dashboard />
	}
]);


function App() {

	return <RouterProvider router={router} />;
}

export default App;
