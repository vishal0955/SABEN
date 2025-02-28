import React from "react";
import { Container, Row, Col, Form, Button, Card, Nav } from "react-bootstrap";
import { FaSearch, FaBell, FaTrash } from "react-icons/fa";

const FeedPage = () => {
  const feedData = [
    {
      section: "Yesterday",
      items: [
        {
          title: "Event 1",
          clicks: "17 opens, 3 clicks",
        },
      ],
    },
    {
      section: "This month",
      items: [
        { title: "Event 2", clicks: "2 opens + other activity" },
        { title: "Event 3", clicks: "8 opens + other activity" },
        { title: "Event 4", clicks: "9 opens + other activity" },
        { title: "Event 5", clicks: "19 opens, 5 clicks" },
      ],
    },
  ];

  return (
    <Container fluid className="p-4 bg-light">
     
      {/* Search and Filters Section */}
      <Row className="mb-4 ">
        <Col md={6}>
          <div className="input-group">
            <Form.Control type="text" placeholder="Search activities" />
            <span className="input-group-text bg-white border-start-0">
              <FaSearch />
            </span>
          </div>
        </Col>
        <Col md={6} className="text-md-end mt-2 mt-md-0">
          <span className="me-3">
            Activity type:{" "}
            <a href="#" style={{ color: "#83cad3", fontWeight: "bold" }}>
              All activity types
            </a>
          </span>
          <span>
            Sequence enrollment:{" "}
            <a href="#" style={{ color: "#83cad3", fontWeight: "bold" }}>
              Any enrollment
            </a>
          </span>
        </Col>
      </Row>

      {/* Feed Data */}
      {feedData.map((section, index) => (
        <div key={index}>
          <h5 className="fw-bold text-muted mb-3">{section.section}</h5>
          {section.items.map((item, idx) => (
            <Card key={idx} className="mb-3 shadow-sm border-0">
              <Card.Body>
                <Row className="align-items-center">
                  <Col md={10}>
                    <Card.Title className="fw-bold text-center">{item.title}</Card.Title>
                    <Card.Text className="text-muted">{item.clicks}</Card.Text>
                  </Col>
                  <Col md={2} className="d-flex align-items-center justify-content-end">
                    <FaBell className="text-muted me-3" />
                    <FaTrash className="text-muted me-3" />
                    <Button style={{ borderColor: "#83cad3", color: "#83cad3" }} size="sm">
                      Open
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </div>
      ))}
    </Container>
  );
};

export default FeedPage;
