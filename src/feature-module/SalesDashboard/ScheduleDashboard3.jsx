import React, { useState } from "react";
import { Container, Row, Col, Button, Nav, Dropdown, Form } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const ScheduleDashboard12 = () => {
  const [view, setView] = useState("timeGridWeek");
  

  const events = [
    { title: "Marketing Weekly", start: "2024-12-24T12:00:00", attendees: 2 },
    { title: "Accounts Meeting", start: "2024-12-24T13:00:00", attendees: 2 },
    { title: "Deep Work", start: "2024-12-24T15:00:00", attendees: 1 },
    { title: "Deep Work", start: "2024-12-26T13:00:00", attendees: 1 },
    { title: "Abdel & Ben Meeting", start: "2024-12-27T12:00:00", attendees: 1 },
  ];

  return (
    <Container fluid className="p-4 bg-light">
      <Row>
        <Col md={2} className="mb-3">
          <div className="d-flex flex-column gap-3">
            <Button variant="light" className="text-start">
              📅 Upcoming meetings (0)
            </Button>
            <Button variant="light" className="text-start">
            ⭐  Starred
            </Button>
            <Button variant="light" className="text-start">
              🔔 Follow-up opportunities (3)
            </Button>
          </div>
        </Col>

        <Col md={10} className="mb-3">
          <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
            <h4 className="fw-bold mb-2 mb-md-0">23 Dec - 29 Dec, 2024</h4>
            <div className="d-flex flex-wrap gap-2">
              <Button variant="outline-secondary">Today</Button>
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary">Week</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setView("dayGridMonth")}>Month View</Dropdown.Item>
                  <Dropdown.Item onClick={() => setView("timeGridWeek")}>Week View</Dropdown.Item>
                  <Dropdown.Item onClick={() => setView("timeGridDay")}>Day View</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Form.Check type="checkbox" label="Hide weekends" className="ms-2" />
              <span className="text-muted">UTC +00:00 Dublin, London, Lisbon</span>
            </div>
          </div>

          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={view}
            events={events}
            headerToolbar={true}
            height="auto"
            eventContent={(eventInfo) => (
              <div className="bg-light border rounded">
                <strong>{eventInfo.event.title}</strong>
                <br />
                <span className="text-muted">
                  {eventInfo.event.extendedProps.attendees} attendees
                </span>
              </div>
            )}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ScheduleDashboard12;
