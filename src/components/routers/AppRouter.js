import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from '../Login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
  return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/*" element={<DashboardRoutes />} />
            </Routes>
        </Router>
  )
};

export default AppRouter;
