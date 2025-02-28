import React from 'react';
import { Nav, Card, Button, Dropdown, ListGroup, Image } from 'react-bootstrap';

const RecordingsDashboard = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <div className="container-fluid">
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-md-4">
            <Nav variant="tabs" defaultActiveKey="my-recordings" className="mb-3" style={tabStyle}>
              <Nav.Item>
                <Nav.Link eventKey="my-recordings" style={activeTabStyle}>My Recordings</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="team-recordings" style={tabLinkStyle}>Team Recordings</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="everyone-recordings" style={tabLinkStyle}>Everyone's Recordings</Nav.Link>
              </Nav.Item>
            </Nav>

            <ListGroup variant="flush">
              {recordings.map((rec, index) => (
                <ListGroup.Item key={index} style={listItemStyle}>
                  <Image src={rec.image} roundedCircle style={profileImageStyle} />
                  <div style={{ flex: 1, marginLeft: '10px' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '2px', fontSize: '16px' }}>{rec.title}</p>
                    <p style={{ color: '#888', marginBottom: '2px', fontSize: '14px' }}>{rec.subtitle}</p>
                    <p style={{ fontSize: '12px', color: '#888' }}>{rec.time}</p>
                  </div>
                  <Button variant="link">
                    <i className="bi bi-play-circle" style={{ color: '#ff007f', fontSize: '24px' }}></i>
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>

          {/* Middle Section */}
          <div className="col-md-4">
            <Card style={cardStyle}>
              <Card.Body>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h5 style={headingStyle}>Trending this month</h5>
                  <Dropdown>
                    <Dropdown.Toggle style={dropdownStyle}>Sort by: Most...</Dropdown.Toggle>
                  </Dropdown>
                </div>

                <div style={{ textAlign: 'center', margin: '20px 0' }}>
                  <Image src="https://via.placeholder.com/50" roundedCircle style={profileImageStyle} />
                  <h6>Unknown Customer</h6>
                  <p>⭐ WEEKLY TEAM ALL HANDS ⭐</p>
                </div>

                <Button style={inviteButtonStyle}>Invite Notetaker</Button>

                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                  <Dropdown>
                    <Dropdown.Toggle style={dropdownStyle}>This Week</Dropdown.Toggle>
                  </Dropdown>
                  <Button style={myScheduleButtonStyle}>My Schedule</Button>
                </div>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                  <Image src="https://via.placeholder.com/50" />
                  <p style={{ color: '#888' }}>No Meetings</p>
                </div>
              </Card.Body>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="col-md-4">
            <Card style={cardStyle}>
              <Card.Body>
                <h5 style={headingStyle}>Live Feed</h5>
                {liveFeed.map((feed, index) => (
                  <div key={index} style={feedItemStyle}>
                    <Image src={feed.image} roundedCircle style={profileImageStyle} />
                    <div style={{ flex: 1, marginLeft: '10px' }}>
                      <p>
                        <strong style={{ color: '#ff007f' }}>{feed.name}</strong> listened to call 🎧
                      </p>
                      <p style={{ fontSize: '12px', color: '#888' }}>{feed.time}</p>
                      <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{feed.title}</p>
                      <p style={{ fontSize: '12px', color: '#888' }}>
                        📅 Held: {feed.date} ⏱ Duration: {feed.duration}
                      </p>
                    </div>
                    <Button variant="link">
                      <i className="bi bi-play-circle" style={{ color: '#ff007f', fontSize: '24px' }}></i>
                    </Button>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dummy Data
const recordings = [
  { image: 'https://via.placeholder.com/40', title: 'Mostafa Interview Pt. 2', subtitle: 'Call', time: '1 week ago' },
  { image: 'https://via.placeholder.com/40', title: 'WEEKLY TEAM ALL HANDS', subtitle: 'Call', time: '3 weeks ago' },
];

const liveFeed = [
  { image: 'https://via.placeholder.com/40', name: 'Amr Geneid', time: '6 months ago at 12:15', title: 'Call with Techunraveling', date: '5 months ago at 17:01', duration: '23m' },
  { image: 'https://via.placeholder.com/40', name: 'Yvonne Osawa', time: '6 months ago at 15:23', title: 'Call with unknown customer', date: '6 months ago at 12:31', duration: '17m' },
];

// Styles
const tabStyle = {
  borderBottom: '2px solid #ddd',
};

const tabLinkStyle = {
  fontSize: '16px',
  fontWeight: '500',
  color: '#000',
};

const activeTabStyle = {
  fontWeight: 'bold',
  color: '#ff007f',
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

const dropdownStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '5px 15px',
};

const inviteButtonStyle = {
  backgroundColor: '#ff007f',
  border: 'none',
  padding: '10px 20px',
  width: '100%',
  borderRadius: '5px',
  color: '#fff',
  marginTop: '10px',
};

const myScheduleButtonStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  padding: '8px 15px',
};

const profileImageStyle = {
  width: '40px',
  height: '40px',
  border: '2px solid #ccc',
};

const feedItemStyle = {
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '15px',
};

const listItemStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

export default RecordingsDashboard;
