import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Row, Col, Button, Card, Image } from 'react-bootstrap';

// Chart.js modules registration
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Conversations = () => {
  // Bar chart data
  const chartData = {
    labels: [''],
    datasets: [
      {
        label: 'Attempted',
        data: [2],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Connected',
        data: [2],
        backgroundColor: 'rgba(255, 206, 86, 0.7)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Logged',
        data: [2],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        min: 0,
        max: 2,
        ticks: {
          stepSize: 0.2,
          font: {
            size: 12,
          },
        },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <Row>
        {/* Sidebar */}
        <Col md={3} style={sidebarStyle}>
          <h5 style={{ fontWeight: 'bold' }}>Dials</h5>
          <p style={activeItemStyle}>Outbound Activity <span style={{ fontSize: '12px' }}>(Total: 2)</span></p>
          <p style={sidebarItemStyle}>Outbound Duration <span>(Total: 0sec)</span></p>
          <p style={sidebarItemStyle}>Inbound Activity <span>(Total: 0)</span></p>
          <p style={sidebarItemStyle}>Inbound Duration <span>(Total: 0sec)</span></p>

          <h5 style={{ fontWeight: 'bold', marginTop: '20px' }}>Conferences</h5>
          <p style={sidebarItemStyle}>Activity <span>(Total: 20)</span></p>
          <p style={sidebarItemStyle}>Duration <span>(Total: 660min)</span></p>

          <h5 style={{ fontWeight: 'bold', marginTop: '20px' }}>SMS</h5>
          <p style={sidebarItemStyle}>Sent <span>(Total: 0)</span></p>
          <p style={sidebarItemStyle}>Received <span>(Total: 0)</span></p>

          <Button style={downloadButtonStyle}>Download ↓</Button>
        </Col>

        {/* Main Chart Area */}
        <Col md={9}>
          <Card style={cardStyle}>
            <Card.Body>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h5 style={headingStyle}>Outbound Activity</h5>
                <Button style={drilldownButtonStyle}>Drilldown</Button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                <Image
                  src="https://i.ibb.co/2c1Ytb5/image.png"
                  roundedCircle
                  style={{ marginRight: '15px', width: '50px', height: '50px', border: '2px solid #ccc' }}
                />
                <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#333' }}>Benjamin Price</span>
              </div>

              <div style={{ marginTop: '30px', padding: '0 10px' }}>
                <Bar data={chartData} options={chartOptions} />
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

const sidebarItemStyle = {
  fontSize: '16px',
  color: '#333',
  marginBottom: '10px',
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
  marginTop: '20px',
};

// Card Styles
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
  fontSize: '16px',
  borderRadius: '20px',
  color: '#fff',
  marginLeft: '10px',
};

export default Conversations;
