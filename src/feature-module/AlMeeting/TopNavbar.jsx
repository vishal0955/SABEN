import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Default styling
import { Navbar, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { FaChartBar, FaComments, FaChartPie, FaChartLine, FaNewspaper, FaGraduationCap, FaDollarSign } from 'react-icons/fa';
import Dashboard from './Dashboard';
import Conversations from './Conversations';
import Engagement from './Engagement';
import Statistics from './Statistics';
import Topics from './Topics';

const TopNavbar = () => {
  return (
    <div>
      {/* Top Navbar */}
      <Navbar
        expand="lg"
        style={{
          backgroundColor: '#0a1a2a',
          padding: '10px 30px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Navbar.Brand
          href="#"
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'white',
            marginRight: 'auto',
          }}
        >
          Team Insights
        </Navbar.Brand>

        <Form style={{ display: 'flex', alignItems: 'center' }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                backgroundColor: '#fff',
                color: '#000',
                border: '1px solid #ccc',
                padding: '6px 15px',
                marginRight: '10px',
                borderRadius: '5px',
              }}
            >
              Sales
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Marketing</Dropdown.Item>
              <Dropdown.Item href="#">Finance</Dropdown.Item>
              <Dropdown.Item href="#">HR</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <FormControl
            type="text"
            placeholder="Sep 29, 2024 - Dec 28, 2024"
            style={{
              minWidth: '220px',
              padding: '6px 12px',
              marginRight: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />

          <FormControl
            type="search"
            placeholder="Search activity types"
            style={{
              minWidth: '220px',
              padding: '6px 12px',
              marginRight: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />

          <Button
            variant="outline-light"
            style={{
              border: '1px solid #fff',
              borderRadius: '5px',
              padding: '6px 20px',
            }}
          >
            More Filters
          </Button>
        </Form>
      </Navbar>

      {/* React Tabs Navigation */}
      <Tabs>
        <TabList style={tabContainerStyle}>
          <Tab style={tabStyle}><FaChartBar size={20} /> Dashboard</Tab>
          <Tab style={tabStyle}><FaComments size={20} /> Conversations</Tab>
          <Tab style={tabStyle}><FaChartPie size={20} /> Engagement</Tab>
          <Tab style={tabStyle}><FaChartLine size={20} /> Statistics</Tab>
          <Tab style={tabStyle}><FaNewspaper size={20} /> Topics</Tab>
          <Tab style={tabStyle}><FaGraduationCap size={20} /> Coaching</Tab>
          <Tab style={tabStyle}><FaDollarSign size={20} /> Deals</Tab>
        </TabList>

        {/* Tab Panels for each tab */}
        <TabPanel>
          <Dashboard/>
        </TabPanel>
        <TabPanel>
         <Conversations/>
        </TabPanel>
        <TabPanel>
          <Engagement/>
        </TabPanel>
        <TabPanel>
      <Statistics/>
        </TabPanel>
        <TabPanel>
         <Topics/>
        </TabPanel>
        <TabPanel>
          <h1>Coaching Content</h1>
        </TabPanel>
        <TabPanel>
          <h1>Deals Content</h1>
        </TabPanel>
      </Tabs>
    </div>
  );
};

// Inline styles for tabs
const tabContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: '#fff',
  padding: '15px 0',
  borderBottom: '1px solid #ddd',
};

const tabStyle = {
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#333',
  border: 'none',
  backgroundColor: 'transparent',
  outline: 'none',
};

export default TopNavbar;
