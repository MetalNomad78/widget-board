import React from 'react';
import { Tabs } from 'antd';
import './styles.css'
import CustomTable from './CustomTable';
import { EllipsisOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const TopNavWidget = () => {

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: '7d',
      children: <CustomTable backgroundColor="white" footerColor="black" type="grid" />,
    },
    {
      key: '2',
      label: '14d',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: '30d',
      children: 'Content of Tab Pane 3',
    },
  ];

  return (
    <div className="redBorder" style={{ border: '4px solid #d9d9d9', borderRadius: '10%', padding: '26px', width: '350px', position: 'relative' }}>
      <Tabs
        defaultActiveKey="1"
        size='large'
        onChange={onChange}
        tabBarStyle={{ marginLeft: '15px', borderBottom: '2px solid #E1E1E1' }} 
        tabBarGutter={20} 
        tabBarUnderlineStyle={{ width:'10', color: '#5E5ADB' }}
        tabBarExtraContent={<EllipsisOutlined style={{color:'#D9D9D9  ',position: 'absolute', top: '3px', left:'260px', fontWeight:'bold',fontSize: '26px', margin: '16px' }} />}
      >
        {items.map(item => (
          <TabPane
            tab={<span style={{ color: '#5E5ADB' }}>{item.label}</span>} 
            key={item.key}
          >
            {item.children}
          </TabPane>
        ))}
      </Tabs>
      
    </div>
  );
}

export default TopNavWidget;
