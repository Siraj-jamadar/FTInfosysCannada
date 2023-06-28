import { useEffect } from 'react';
import Routes from './routes';
import { FloatButton } from 'antd';

const App = _ => {
  useEffect(() => {window.gtag('config', 'AW-11205520363');
    window.gtag('event', 'conversion', {'send_to': 'AW-11205520363'});}, [])
  return (
    <div className='App'>
      <div>
        <Routes />
        <FloatButton.BackTop />
      </div>
    </div>
  );
};

export default App;
