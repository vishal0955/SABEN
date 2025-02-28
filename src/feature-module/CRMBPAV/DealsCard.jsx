import React from "react";
import { Container, Row, Col, Button, Form, Accordion, Tab, Tabs } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight, FaCog, FaInfoCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { TiBook } from "react-icons/ti";
const DealsCard = () => {
  // Define custom primary color
  const primaryColor = "#2da3bb";

  const menuItems = [
    { title: "Contacts", content: "Manage all your contacts in one place." },
    { title: "Companies", content: "View and manage company details." },
    { title: "Leads", content: "Track potential clients and leads." },
    { title: "Deals", content: "Manage your sales pipeline efficiently." },
    { title: "Tickets", content: "Handle customer support tickets." },
    { title: "Invoices", content: "Generate and track invoices easily." },
    { title: "Health Score", content: "Monitor customer health scores." },
    { title: "Lead Score", content: "Evaluate and rank potential leads." },
    { title: "Attachments", content: "Store and manage important files." },
  ];

  return (
    <div className='page-wrapper'>
    <Container fluid style={{ backgroundColor: "#f5f9fb", minHeight: "100vh", padding: "20px" }}>
      <Row>
        {/* Left Sidebar */}
        <Col md={3} className="bg-white border-end p-3 shadow-sm">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold" style={{ color: primaryColor }}>
              <FaChevronLeft className="me-2" />
              Deals
            </h5>
            <Button
              variant="link"
              className="fw-semibold p-0 dropdown-toggle"
              style={{ color: primaryColor }}
            >
              Actions
            </Button>
          </div>

          {/* Main Details */}
          <h6 className="fw-bold mb-3">StraightIn Lead - Turning Point Management</h6>
          <p className="text-muted">Group, MatthewHenry</p>
          <Form className="mt-3">
            <Form.Group className="mb-3">
              <Form.Label className="text-muted">Amount</Form.Label>
              <Form.Control type="text" placeholder="--" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-muted">Close Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-muted">Stage</Form.Label>
              <Form.Control type="text" value="Qualified" readOnly />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-muted">Pipeline</Form.Label>
              <Form.Control type="text" value="Sales pipeline" readOnly />
            </Form.Group>
          </Form>

          <div className="d-flex justify-content-between text-center mt-3">
  {[
    { label: "Note", icon: <FaRegPenToSquare /> },
    { label: "Email", icon: <IoMdMail /> },
    { label: "Call", icon:<FaPhone /> },
    { label: "Task", icon: <TiBook /> },
    { label: "Meeting", icon: <FaCalendarAlt /> },
    { label: "More", icon: <IoIosMore /> },
  ].map((action, index) => (
    <div key={index}>
      <div className="rounded-circle border bg-light p-2">
        {/* Use appropriate icon */}
        {React.cloneElement(action.icon, { style: { color: "#2da3bb" } })}
      </div>
      <small>{action.label}</small>
    </div>
  ))}
</div>


          {/* Accordion Section */}
          <Accordion className="mt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>About this deal</Accordion.Header>
              <Accordion.Body>
                Add details about this deal.{" "}
                <Button variant="link" style={{ color: primaryColor }}>
                  Actions
                </Button>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Invoice Payments</Accordion.Header>
              <Accordion.Body>Add payment information here.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Collaborators</Accordion.Header>
              <Accordion.Body>List collaborators for this deal.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Deal Splits</Accordion.Header>
              <Accordion.Body>Manage deal splits here.</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        {/* Main Content */}
        <Col md={6} className="bg-white border-end p-3 shadow-sm">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold">Activities</h5>
            <Button variant="link" className="p-0" style={{ color: primaryColor }}>
              <FaCog className="me-2" />
              Customize record
            </Button>
          </div>

          {/* Tabs Section */}
          <Tabs defaultActiveKey="overview" id="content-tabs" className="mb-3">
            <Tab eventKey="overview" title="Overview">
              <div className="p-3 bg-light border rounded">
                <h6 className="fw-bold">Company Summary</h6>
                <Form.Group className="mt-3">
                  <Form.Label>Summary Notes</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Add notes here..." />
                </Form.Group>
              </div>
            </Tab>

            <Tab eventKey="activities" title="Activities">
              <div className="p-3 bg-light border rounded">
                <h6 className="fw-bold">December 2024</h6>
                <div className="mb-3">
                  <strong>Deal activity</strong>
                  <p>
                    Deal moved to Qualified by Integration.{" "}
                    <a href="/" style={{ color: primaryColor }}>
                      View details
                    </a>
                  </p>
                  <small className="text-muted">16 Dec 2024 at 13:10 GMT</small>
                </div>
                <div>
                  <strong>This deal was created</strong>
                  <br />
                  <small className="text-muted">16 Dec 2024 at 13:10 GMT</small>
                </div>
              </div>
            </Tab>

            <Tab eventKey="intelligence" title="AI">
              <div className="p-3 bg-light border rounded">
                <p>AI content goes here.</p>
              </div>
            </Tab>
          </Tabs>
        </Col>

        {/* Right Sidebar */}
        <Col md={3} className="bg-white p-3 shadow-sm">
      <Accordion defaultActiveKey="0">
        {menuItems.map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            {/* Custom Header (Without Dropdown Arrow) */}
            <Accordion.Header className="w-100">
              <div className="d-flex align-items-center w-100 justify-content-between">
                <div className="d-flex align-items-center">
                  <FaChevronRight className="me-2" style={{ color: primaryColor }} />
                  {item.title}
                </div>
                <Button variant="link" className="p-0" style={{ color: primaryColor }}>
                  + Add
                </Button>
              </div>
            </Accordion.Header>

            {/* Accordion Body */}
            <Accordion.Body>
              <p>{item.content}</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Col>

      </Row>
    </Container>
    </div>
  );
};

export default DealsCard;
