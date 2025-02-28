import React from 'react';
import { ProgressBar, Row, Col, Button, Card, Image } from 'react-bootstrap';

const Statistics = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <Row>
        {/* Sidebar */}
        <Col md={3} style={sidebarStyle}>
          <h5 style={sidebarHeadingStyle}>Talk Ratio</h5>
          <p style={activeItemStyle}>Talk Ratio</p>
          <p style={sidebarItemStyle}>Longest Monologue</p>
          <p style={sidebarItemStyle}>Longest Customer Story</p>
          <p style={sidebarItemStyle}>Talking Speed</p>
          <p style={sidebarItemStyle}>Patience</p>
          <p style={sidebarItemStyle}>Question Rate</p>
        </Col>

        {/* Main Content */}
        <Col md={9}>
          <Card style={cardStyle}>
            <Card.Body>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h5 style={headingStyle}>Talk Ratio</h5>
                  <p style={{ color: '#888', fontSize: '14px' }}>
                    Percentage of call that the team member spoke
                  </p>
                </div>
                <Button style={drilldownButtonStyle}>Drilldown</Button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                <Image
                  src="https://i.ibb.co/2c1Ytb5/image.png"
                  roundedCircle
                  style={profileImageStyle}
                />
                <span style={profileNameStyle}>Benjamin Price</span>
              </div>

              {/* Progress Bar */}
              <div style={{ marginTop: '30px', padding: '0 20px', position: 'relative' }}>
                <ProgressBar now={49} style={{ height: '15px', backgroundColor: '#e0e0e0' }}>
                  <ProgressBar now={49} variant="secondary" style={{ borderRadius: '5px' }} />
                </ProgressBar>

                {/* Percentage labels and markers */}
                <div style={markerStyle}>
                  <span style={{ ...markerTextStyle, left: '44%' }}>45%</span>
                  <span style={{ ...markerTextStyle, left: '49%', fontWeight: 'bold' }}>49%</span>
                </div>

                {/* Best Practice Green Line */}
                <div style={bestPracticeLineStyle}></div>
                <span style={bestPracticeTextStyle}>BEST PRACTICE</span>
              </div>

              <div style={teamAverageStyle}>
                <span>Team Average</span>
                <div style={teamAverageDotStyle}></div>
              </div>

              <div style={axisStyle}>
                {[...Array(8)].map((_, index) => (
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
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '20px',
  color: '#fff',
};

const teamAverageStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
  fontSize: '14px',
  fontWeight: 'bold',
};

const teamAverageDotStyle = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: 'black',
  marginLeft: '5px',
};

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

const markerStyle = {
  position: 'relative',
  top: '-25px',
};

const markerTextStyle = {
  position: 'absolute',
  fontSize: '14px',
  color: '#28a745',
  fontWeight: 'bold',
};

const bestPracticeLineStyle = {
  position: 'absolute',
  top: '-40px',
  left: '45%',
  width: '2px',
  height: '70px',
  backgroundColor: '#28a745',
  borderLeft: '2px solid #28a745',
};

const bestPracticeTextStyle = {
  position: 'absolute',
  top: '-55px',
  left: '47%',
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#28a745',
};

export default Statistics;
