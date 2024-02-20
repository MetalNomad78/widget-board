import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Page from './Page';

const Side = () => {
  const [bottomImageMargin, setBottomImageMargin] = useState('10px');

  useEffect(() => {
    const calculateMargin = () => {
      const screenHeight = window.innerHeight;
      const margin = screenHeight - 450;
      setBottomImageMargin(`${margin}px`);
    };

    calculateMargin();

    window.addEventListener('resize', calculateMargin);

    return () => {
      window.removeEventListener('resize', calculateMargin);
    };
  }, []);

  return (
    <Router>
    <div style={{ width: '80px', height: '100vh', position: 'fixed', top: 0, left: 0, background: '#f0f2f5', padding: '20px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src="https://i.ibb.co/g9fcsPF/L2493.png" alt="App Icon" style={{ width: '35px', height: '35px', marginBottom: '50px' }} />
      <Tabs defaultActiveKey="tab1" tabPosition="left" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Tabs.TabPane tab={<img src="https://i.ibb.co/Qr6HcpV/button1.png" alt="Tab 1" style={{ width: '30px', height: '30px' }} />} key="tab1" />
        <Tabs.TabPane tab={<img src="https://i.ibb.co/0Q6tTqV/button2.png" alt="Tab 2" style={{ width: '30px', height: '30px' }} />} key="tab2" />
        <Tabs.TabPane tab={<img src="https://i.ibb.co/sJ77xL4/button3.png" alt="Tab 3" style={{ width: '30px', height: '30px' }} />} key="tab3" />
        <Tabs.TabPane tab={<Link to="/page"><img src="https://i.ibb.co/tbkkTjw/button4.png" alt="Page" style={{ width: '30px', height: '30px' }} /></Link>} key="page" />
      </Tabs>
      <img src="https://i.ibb.co/FBp1mqF/avatar.png" alt="Bottom" style={{ width: '80%', marginTop: bottomImageMargin, alignSelf: 'center' }} />    
    </div>
    <Routes>
  <Route path="/page" element={<Page />} />
</Routes>
    </Router>
  );
}

export default Side;
