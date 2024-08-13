import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './App.css';

// Import your page components
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';
import Faq from './pages/Faq';
import PricingPlan from './pages/PricingPlan';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound'; // 404 Error page
import Layout from './pages/Layout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="our-services" element={<OurServices />} />
        <Route path="faq" element={<Faq />} />
        <Route path="pricing-plan" element={<PricingPlan />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Error page */}
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;