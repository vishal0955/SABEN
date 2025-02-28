import React from 'react';
import { ProgressBar, Row, Col, Button, Card, Image } from 'react-bootstrap';

const Engagement = () => {
  return (
    <div style={{ padding: '40px', backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <Row>
        {/* Sidebar */}
        <Col md={3} style={sidebarStyle}>
          <h5 style={sidebarHeadingStyle}>Listens</h5>
          <p style={activeItemStyle}>Listens</p>
          <p style={sidebarItemStyle}>Focus</p>
          <p style={sidebarItemStyle}>Coaching Frameworks</p>
          <p style={sidebarItemStyle}>Shares</p>
          <p style={sidebarItemStyle}>Comments</p>
          <p style={sidebarItemStyle}>Playlist Contributions</p>

          <Button style={downloadButtonStyle}>
            Download <span style={{ fontSize: '18px' }}>↓</span>
          </Button>
        </Col>

        {/* Main Content */}
        <Col md={9}>
          <Card style={cardStyle}>
            <Card.Body>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h5 style={headingStyle}>Listens</h5>
                  <p style={{ color: '#888', fontSize: '14px' }}>Calls & Meetings Played</p>
                </div>
                <Button style={drilldownButtonStyle}>Drilldown</Button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
                <Image
                  src="https://i.ibb.co/2c1Ytb5/image.png"
                  roundedCircle
                  style={profileImageStyle}
                />
                <div>
                  <span style={profileNameStyle}>Benjamin Price</span>
                  <p style={teamAverageStyle}>Team Average</p>
                </div>
              </div>

              <div style={{ marginTop: '20px', padding: '0 20px' }}>
                <ProgressBar style={{ height: '12px', backgroundColor: '#f0f2f5' }}>
                  <ProgressBar variant="danger" now={5} key={1} />
                  <ProgressBar variant="warning" now={15} key={2} />
                  <ProgressBar variant="info" now={30} key={3} />
                </ProgressBar>
              </div>

              <div style={progressLegendStyle}>
                <span style={legendItemStyle('#ff007f')}>Attempted</span>
                <span style={legendItemStyle('#ffcc00')}>Connected</span>
                <span style={legendItemStyle('#0033cc')}>Logged</span>
              </div>

              <div style={axisStyle}>
                {[...Array(11)].map((_, index) => (
                  <span key={index} style={tickStyle}>{index * 10}</span>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

// Sidebar Styles
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

const downloadButtonStyle = {
  backgroundColor: '#ff007f',
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
  width: '100%',
  borderRadius: '5px',
  color: 'white',
  marginTop: '20px',
};

// Card Styles
const cardStyle = {
  borderRadius: '10px',
  padding: '30px',
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
  padding: '10px 25px',
  fontSize: '16px',
  borderRadius: '20px',
  color: '#fff',
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

const teamAverageStyle = {
  fontSize: '14px',
  color: '#666',
  marginTop: '-5px',
};

const progressLegendStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '20px',
  fontWeight: 'bold',
  color: '#333',
};

const legendItemStyle = (color) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  color: color,
  fontSize: '14px',
});

const axisStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '15px',
  padding: '0 20px',
};

const tickStyle = {
  fontSize: '14px',
  color: '#666',
};

export default Engagement;
