

import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Nav, Badge } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from '@fullcalendar/timegrid';

const customColor = { backgroundColor: "#83cad3", borderColor: "#83cad3", color: "white" };

const SalesDashboard = () => {
  const [activeTab, setActiveTab] = useState("schedule");

  return (
    <Container fluid className="p-4 bg-light">
      {/* Header */}
    

  
      {/* Main Content */}
      <Row>
        {/* Left Column */}
        <Col lg={8}>
          <Card className="p-4 mb-4 shadow-sm">
            <h5 className="fw-bold">Your tasks today</h5>
            <Row className="text-center">
              <Col>
                <p className="mb-1 text-muted">CALLS</p>
                <h4>0</h4>
              </Col>
              <Col>
                <p className="mb-1 text-muted">EMAILS</p>
                <h4>0</h4>
              </Col>
              <Col>
                <p className="mb-1 text-muted">TO-DOS</p>
                <h4 style={{ color: "#83cad3" }}>1</h4>
              </Col>
              <Col>
                <p className="mb-1 text-muted">LINKEDIN</p>
                <h4>0</h4>
              </Col>
              <Col>
                <p className="mb-1 text-muted">OVERDUE</p>
                <h4 className="text-danger">172</h4>
              </Col>
              <Col>
                <p className="mb-1 text-muted">DUE TOMORROW</p>
                <h4 className="text-success">2</h4>
              </Col>
            </Row>
          </Card>

          {/* Guided Actions */}
          <Card className="p-4 shadow-sm">
            <h5 className="fw-bold">My Tasks</h5>
            <div className="d-flex gap-2 mb-3">
              <Button style={customColor} className="fw-bold">
                Today <Badge style={customColor}>8</Badge>
              </Button>
              <Button variant="outline-primary" style={customColor}>
                This Week <Badge style={customColor}>6</Badge>
              </Button>
              <Button variant="outline-primary" style={customColor}>
                Next Week <Badge style={customColor}>2</Badge>
              </Button>
            </div>

            {/* Action Items */}
            <Card className="p-3 mb-3 shadow-sm">
              <h6>Follow up on meetings</h6>
              <p className="text-muted mb-2">
                2 meetings occurred in the last 7 days and need a follow-up
              </p>
              <a href="#" style={{ color: "#83cad3" }}>
                Follow up
              </a>
            </Card>

            <Card className="p-3 mb-3 shadow-sm">
              <h6>
                Send a follow-up email to <strong>Gursewek Singh</strong>
              </h6>
              <p className="text-muted mb-2">
                Gursewek Singh opened your last email but hasn't replied yet
              </p>
              <a href="#" style={{ color: "#83cad3" }}>
                Follow up with Gursewek Singh
              </a>
            </Card>

            <Card className="p-3 shadow-sm">
              <h6>
                Send a follow-up email to <strong>Matthew Fionda</strong>
              </h6>
              <p className="text-muted mb-2">
                Matthew Fionda opened your last email but hasn't replied yet
              </p>
              <a href="#" style={{ color: "#83cad3" }}>
                Follow up with Matthew Fionda
              </a>
            </Card>
          </Card>
        </Col>

        {/* Right Column (Schedule) */}
        <Col lg={4}>
          <Card className="p-4 shadow-sm">
            <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
              <Nav.Item>
                <Nav.Link eventKey="schedule">Schedule</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="insights">Insights</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="feed">Feed</Nav.Link>
              </Nav.Item>
            </Nav>

            <div className="mt-3">
              {activeTab === "schedule" && (
                <>
                  <h6 className="fw-bold">Today, 24 December</h6>
                  <Button variant="outline-secondary" size="sm">
                    1 task due
                  </Button>
                  <ul className="list-unstyled mt-3">
                    <li className="border-bottom py-2">
                      <p className="mb-1">
                        <strong>08:00</strong> - Follow up on Jigsaw 24 - COP AV Refresh...
                      </p>
                    </li>
                    <li className="border-bottom py-2">
                      <p className="mb-1">
                        <strong>11:00</strong> - PHYSIO (Sports Massage) Ian
                      </p>
                      <Badge style={customColor}>✔️ Prospecting new business</Badge>
                    </li>
                    <li className="py-2">
                      <p className="mb-1">
                        <strong>13:00</strong> - Deep Work Focus Time
                      </p>
                      <p className="text-muted">1 attendee (1 yes)</p>
                    </li>
                  </ul>

                  <FullCalendar 
                    plugins={[timeGridPlugin]}
                    initialView="timeGridDay"
                    headerToolbar={{
                      left: 'prev,next',
                      center: 'title',
                      right: 'timeGridDay'
                    }}
                  />
                </>
              )}
              {activeTab === "insights" && (
                <div>
                  <h6 className="fw-bold">Insights</h6>
                  <p>Here you can display insights related to sales and performance.</p>
                </div>
              )}
              {activeTab === "feed" && (
                <div>
                  <h6 className="fw-bold">Feed</h6>
                  <p>Here you can display the latest updates and news feed.</p>
                </div>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SalesDashboard;