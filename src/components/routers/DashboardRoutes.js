import { Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import MarvelScreen from '../Marvel/MarvelScreen';
import DcScreen from '../DC/DcScreen';
import SearchScreen from '../Search/SearchScreen';
import HeroScreen from '../Hero/HeroScreen';

const DashboardRoutes = () => {
  return (
      <>
         <Navbar />

        <div className="container">
          <Routes>
              <Route path="marvel" element={<MarvelScreen />} />
              <Route path="dc" element={<DcScreen />} />
              <Route path="search" element={<SearchScreen />} />
              <Route path="hero/:id" element={<HeroScreen />} />
              <Route path="/" element={<MarvelScreen />} />
          </Routes>
        </div>
      </>
  )
};

export default DashboardRoutes;
