import React from 'react';
import { ProgressBar, Row, Col, Button, Card, Dropdown, Image, Badge } from 'react-bootstrap';

const Topics = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <Row>
        {/* Sidebar */}
        <Col md={3} style={sidebarStyle}>
          <h5 style={sidebarHeadingStyle}>Topics Duration</h5>
          <p style={activeItemStyle}>Topics Duration</p>
          <p style={sidebarItemStyle}>Frequency</p>
          <p style={sidebarItemStyle}>Mentioned By Time</p>
          <Dropdown>
            <Dropdown.Toggle style={dropdownStyle} id="dropdown-basic">
              Agenda ▼
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
              <Dropdown.Item href="#/action-2">This Week</Dropdown.Item>
              <Dropdown.Item href="#/action-3">This Month</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        {/* Main Content */}
        <Col md={9}>
          <Card style={cardStyle}>
            <Card.Body>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h5 style={headingStyle}>Topic Duration</h5>
                  <p style={{ color: '#888', fontSize: '14px' }}>
                    The amount of time spent discussing each topic
                  </p>
                </div>
                <Button style={drilldownButtonStyle}>Drilldown</Button>
              </div>

              <Row style={{ marginTop: '20px' }}>
                <Col md={6}>
                  <h6 style={{ color: '#ff007f', fontWeight: 'bold' }}>Pricing <span style={{ color: '#333' }}>1h 3m</span></h6>
                  {topics.map((topic, index) => (
                    <div key={index} style={topicRowStyle}>
                      <span>{topic.name}</span>
                      <span style={{ fontWeight: 'bold', minWidth: '80px', textAlign: 'right' }}>{topic.time}</span>
                      <ProgressBar now={topic.percentage} style={progressBarStyle}>
                        <ProgressBar now={topic.percentage} style={{ backgroundColor: topic.color }} />
                      </ProgressBar>
                    </div>
                  ))}
                </Col>

                <Col md={6} style={{ textAlign: 'right' }}>
                  <h6 style={{ fontWeight: 'bold' }}>Pricing</h6>
                  <p style={{ color: '#888', fontSize: '14px' }}>
                    The amount of time spent discussing each topic in the host user's calls
                  </p>

                  <Dropdown style={{ marginBottom: '15px' }}>
                    <Dropdown.Toggle style={dropdownStyle} id="dropdown-basic">
                      ▼
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Year</Dropdown.Item>
                      <Dropdown.Item>Cost</Dropdown.Item>
                      <Dropdown.Item>Deal</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  {tags.map((tag, index) => (
                    <Badge key={index} style={badgeStyle}>
                      {tag.name} <strong>{tag.time}</strong>
                    </Badge>
                  ))}

                  <div style={{ marginTop: '20px', textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                    <Image src="https://i.ibb.co/2c1Ytb5/image.png" roundedCircle style={profileImageStyle} />
                    <span style={profileNameStyle}>Benjamin Price</span>
                  </div>

                  <ProgressBar now={64} style={{ width: '250px', height: '15px', backgroundColor: '#e0e0e0' }}>
                    <ProgressBar now={64} variant="primary" />
                  </ProgressBar>

                  <p style={{ fontWeight: 'bold', fontSize: '14px', marginTop: '5px' }}>64mins</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

// Data
const topics = [
  { name: 'Partners', time: '59m 51s', percentage: 80, color: '#ff4d4d' },
  { name: 'Wrap-up', time: '16m 16s', percentage: 30, color: '#ffdd57' },
  { name: 'Services', time: '15m 25s', percentage: 25, color: '#ff914d' },
  { name: 'Action Items', time: '13m 41s', percentage: 20, color: '#66cc66' },
];

const tags = [
  { name: 'year', time: '1333s' },
  { name: 'cost', time: '343s' },
  { name: 'pay', time: '261s' },
  { name: 'deal', time: '197s' },
];

// Styles
const sidebarStyle = {
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
};

const sidebarHeadingStyle = {
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '10px',
};

const sidebarItemStyle = {
  fontSize: '16px',
  color: '#333',
  marginBottom: '10px',
  cursor: 'pointer',
};

const activeItemStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#ff007f',
  marginBottom: '10px',
};

const dropdownStyle = {
  backgroundColor: '#ff007f',
  border: 'none',
  padding: '8px 20px',
  borderRadius: '20px',
  color: '#fff',
  fontWeight: 'bold',
};

const profileImageStyle = {
  marginRight: '15px',
  width: '50px',
  height: '50px',
  border: '2px solid #ccc',
};

const profileNameStyle = {
  fontWeight: 'bold',
  fontSize: '18px',
  color: '#333',
};

const cardStyle = {
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
};

const headingStyle = {
  fontWeight: 'bold',
  color: '#333',
};

const drilldownButtonStyle = {
  backgroundColor: '#ff007f',
  border: 'none',
  padding: '8px 20px',
  borderRadius: '20px',
  color: '#fff',
};

const topicRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',
};

const progressBarStyle = {
  width: '150px',
  height: '10px',
  backgroundColor: '#e0e0e0',
};

const badgeStyle = {
  backgroundColor: '#4d79ff',
  padding: '8px 15px',
  borderRadius: '20px',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '14px',
  marginRight: '10px',
};

export default Topics;
