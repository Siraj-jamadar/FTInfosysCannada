import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button, Result } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Navbar = lazy(() => import('./components/app/layout/navbar'));
const Footer = lazy(() => import('./components/app/layout/footer'));
const LandingPage = lazy(() => import('./components/app/home/LandingPage'));
const AboutUs = lazy(() => import('./components/app/home/AboutUs'));
const OurServices = lazy(() => import('./components/app/home/OurServices'));
const ContactUs = lazy(() => import('./components/app/home/ContactUs'));

const NotFound = _ => (
  <Result
    status='404'
    title='404'
    subTitle='Sorry, the page you visited does not exist.'
    extra={
      <Link to='/'>
        <Button type='primary'>Back Home</Button>
      </Link>
    }
  />
);

const Layout = _ => (
  <Suspense fallback={<LoadingOutlined className='suspense-loading-icon' spin />}>
    <Router>
      <div className='web-layout'>
        <div className='header-section'>
          <Navbar />
        </div>
        <div className='body-section'>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/our-services' element={<OurServices />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <div className='footer-section'>
          <Footer />
        </div>
      </div>
    </Router>
  </Suspense>
);

export default Layout;
