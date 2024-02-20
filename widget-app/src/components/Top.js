import React, { useRef, useState } from 'react';
import { Tabs, Space, Input, Modal, Button } from 'antd';
import { HomeOutlined, SettingOutlined, PlusOutlined } from '@ant-design/icons';

const Top = () => {
  const nextTabIndex = useRef(1);
  const [activeKey, setActiveKey] = useState('home');
  const [tabsList, setTabsList] = useState([{ tab: <HomeOutlined style={{ color: '#667085' }} />, key: 'home' }]);
  const [newTabName, setNewTabName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      setNewTabName('');
      setIsModalVisible(true);
    } else if (action === 'remove') {
      const newTabsList = tabsList.filter((tab) => tab.key !== targetKey);
      if (targetKey === activeKey) {
        const newActiveKey = newTabsList.length > 0 ? newTabsList[newTabsList.length - 1].key : 'home';
        setActiveKey(newActiveKey);
      }
      setTabsList(newTabsList);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setTabsList((prev) => [
      ...prev,
      {
        tab: newTabName || `Tab ${nextTabIndex.current}`,
        key: `tab${nextTabIndex.current}`,
      },
    ]);
    nextTabIndex.current++;
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <header className="App-header" style={{ marginLeft: '80px', height: '70px' }}>
      <Space size={30} style={{ float: 'right', marginRight: '20px' }}>
        <Button
          type="text"
          icon={<PlusOutlined style={{ color: '#5E5ADB' }} />}
          onClick={() => onEdit(null, 'add')}
          style={{ color: '#5E5ADB', marginTop: '5px' }}
        >
          Add Widget
        </Button>
        <SettingOutlined style={{ fontSize: '20px', color: '#667085' }} />
      </Space>

      <Tabs
        activeKey={activeKey}
        type="editable-card"
        onEdit={onEdit}
        onChange={(key) => setActiveKey(key)}
        tabBarStyle={{
          height: '50px', // Adjust the height of inactive tabs
          color: '#5E5ADB', // Text color in the inactive tabs
          backgroundColor: 'white', // Background color of the active tab
        }}
      >
        {tabsList.map((tabInfo) => (
          <Tabs.TabPane
            key={tabInfo.key}
            tab={tabInfo.tab}
            closable={tabInfo.key !== 'home' && tabInfo.key === activeKey}
          >
            <div>This is content of {tabInfo.key === 'home' ? 'Home' : tabInfo.tab}</div>
          </Tabs.TabPane>
        ))}
      </Tabs>
      <Modal
        title="Create New Tab"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          placeholder="Enter tab name"
          value={newTabName}
          onChange={(e) => setNewTabName(e.target.value)}
        />
      </Modal>
    </header>
  );
};

export default Top;
