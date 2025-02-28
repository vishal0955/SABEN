import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, Row, Col } from 'react-bootstrap';

// Chart.js modules ko register karna zaroori hai
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Chart Data
  const chartData = {
    labels: ['06 Oct', '13 Oct', '20 Oct', '27 Oct', '03 Nov', '10 Nov', '17 Nov', '24 Nov', '01 Dec', '08 Dec', '15 Dec', '22 Dec', '29 Dec'],
    datasets: [
      {
        label: 'Conferences',
        data: [0.8, 1.0, 0.5, 1.2, 0.7, 1.9, 0.8, 0.6, 0.9, 1.1, 0.7, 0.9, 0.4],
        borderColor: '#ff007f',
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
    ],
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <Row>
        {/* Activity Over Time Chart */}
        <Col md={8}>
          <Card style={cardStyle}>
            <Card.Body>
              <h5 style={headingStyle}>Activity Over Time</h5>
              <p style={{ color: '#888', marginBottom: '10px' }}>Engagement Overall</p>
              <div style={legendStyle}>
                <span style={{ color: '#ff007f', fontWeight: 'bold' }}>Conferences </span> <span>20</span>
                <span style={{ color: '#f4c542', marginLeft: '20px' }}>Dials Outbound </span> <span>0</span>
                <span style={{ color: '#35c2f7', marginLeft: '20px' }}>Dials Inbound </span> <span>0</span>
                <span style={{ color: '#1f3a93', marginLeft: '20px' }}>Messages </span> <span>0</span>
              </div>
              <Line data={chartData} />
            </Card.Body>
          </Card>
        </Col>

        {/* Coaching Activity and Engagement Stats */}
        <Col md={4}>
          <Card style={cardStyle}>
            <Card.Body>
              <h5 style={headingStyle}>Coaching Activity</h5>
              <p style={{ color: '#888' }}>Engagement Overall</p>
              <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <div style={circleStyle}>TOTAL 0</div>
              </div>
              <div>
                <p><span style={{ color: '#ff007f' }}>●</span> Self Coaching 0</p>
                <p><span style={{ color: '#1f3a93' }}>●</span> Manager-Led Coaching 0</p>
                <p><span style={{ color: '#f4c542' }}>●</span> Team Coaching 0</p>
              </div>
            </Card.Body>
          </Card>

          {/* Engagement Stats */}
          <Card style={cardStyle}>
            <Card.Body>
              <h5 style={headingStyle}>Engagement Stats</h5>
              <p style={statItemStyle}><span style={statCircleStyle('#00e676')}></span> Talktime Ratio 0%</p>
              <p style={statItemStyle}><span style={statCircleStyle('#00c4ff')}></span> Longest Monologue 0s</p>
              <p style={statItemStyle}><span style={statCircleStyle('#ff4c4c')}></span> Longest Customer Story 0s</p>
              <p style={statItemStyle}><span style={statCircleStyle('#ff6384')}></span> Talking Speed 0wpm</p>
              <p style={statItemStyle}><span style={statCircleStyle('#50e3c2')}></span> Patience 0s</p>
              <p style={statItemStyle}><span style={statCircleStyle('#ffbb33')}></span> Question Rate 0</p>
            </Card.Body>
          </Card>

          {/* Hot Topics */}
          <Card style={cardStyle}>
            <Card.Body>
              <h5 style={headingStyle}>Hot Topics</h5>
              <p style={{ textAlign: 'center', color: '#888' }}>No data available</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

// Inline Styles
const cardStyle = {
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
  marginBottom: '20px',
  backgroundColor: '#fff',
};

const headingStyle = {
  fontWeight: 'bold',
  color: '#333',
};

const legendStyle = {
  display: 'flex',
  justifyContent: 'start',
  fontSize: '14px',
  marginBottom: '15px',
  fontWeight: 'bold',
};

const circleStyle = {
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  backgroundColor: '#eef2f5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#666',
};

const statItemStyle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  color: '#333',
};

const statCircleStyle = (color) => ({
  display: 'inline-block',
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: color,
  marginRight: '10px',
});

export default Dashboard;
