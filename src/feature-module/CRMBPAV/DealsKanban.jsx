import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Offcanvas,
  Nav,
  Table,
  Dropdown,
} from "react-bootstrap";
import { FaFile } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { CiSaveUp2 } from "react-icons/ci";
import { all_routes } from "../router/all_routes";
import { Link } from "react-router-dom";

const DealsKanban = () => {
  const [activeTab, setActiveTab] = useState("All contacts");

  const tabs = ["All deals", "My deals", "open deals"];

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="page-wrapper">
      <Container fluid className="py-3 border-bottom bg-white">
        {/* Header Top Section */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold text-primary">Deals</h4>
          <div className="d-flex gap-2">
            <Button variant="outline-secondary">Actions</Button>
            <Button variant="outline-secondary">Import</Button>
            <Button variant="danger" onClick={handleShow}>
              Create deal
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header
                className="bg-gradient-to-r from-teal-500 to-blue-600 text-white"
                closeButton
              >
                <Offcanvas.Title>Create Deal</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Deal Name</Form.Label>
                    <Form.Control type="text" placeholder="Deal Name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Pipeline</Form.Label>
                    <Form.Select>
                      <option>Deals Pipeline</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Deal State</Form.Label>
                    <Form.Select>
                      <option>Appointment schedule</option>
                      <option>Qualified to Buy</option>
                      <option>Presentation Schedule</option>
                      <option>Contract Sent</option>
                      <option>Closed Won</option>
                      <option>Closed Lost</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Close Date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Deal Owner</Form.Label>
                    <Form.Select>
                      <option>Nikunj</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Deal Type</Form.Label>
                    <Form.Select>
                      <option>New Business</option>
                      <option>Existing Business</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Priority</Form.Label>
                    <Form.Select>
                      <option value="">Select Priority</option>
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </Form.Select>
                  </Form.Group>
                </Form>

                <div className="d-flex justify-content-between mt-3">
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant="primary">Create</Button>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="d-flex mb-4 flex-wrap"></div>
        {/* <div className=" d-flex mb-4  flex-wrap  ">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`py-2 ${activeTab === tab ? "active" : ""}`}
              style={{
                border:
                  activeTab === tab ? "1px solid rgb(72, 74, 77)" : "1px solid #ccc",
                paddingRight: "80px",
                paddingLeft: "10px",
                width: "25%",
                backgroundColor:
                  activeTab === tab ? "rgba(54, 56, 58, 0.19)" : "#ffffff",
                color: "#6c757d",
                fontSize: "1rem",
                cursor: "pointer",
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
          <div className="ms-auto d-flex">
            <button className="btn btn-a text-primary fw-medium">+ Add view (5/50)</button>
            <button className="btn btn-a text-primary fw-medium">All views</button>
          </div>
        </div> */}

        {/* Filters Section */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex gap-2 align-items-center">
            <Button
              variant="outline-primary"
              className="d-flex align-items-center"
            >
              <IoMdMenu />
            </Button>
            <Form.Select style={{ width: "200px" }}>
              <option>Sales pipeline</option>
            </Form.Select>

            {/* Deal Owner Dropdown */}
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-primary"
                id="dropdown-deal-owner"
              >
                Deal owner
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Mayank</Dropdown.Item>
                <Dropdown.Item href="#">Pradeep</Dropdown.Item>
                <Dropdown.Item href="#">Add New Owner</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Create Date Dropdown */}
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-primary"
                id="dropdown-create-date"
              >
                Create date
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Today</Dropdown.Item>
                <Dropdown.Item href="#">Last 7 Days</Dropdown.Item>
                <Dropdown.Item href="#">Custom Date</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Button variant="outline-primary">More</Button>
            <Button variant="outline-primary">
              <i className="bi bi-funnel"></i> Advanced filters
            </Button>
          </div>

          <div className="d-flex align-items-center gap-3">
            <span className="text-primary">Hide Insights</span>
            <div className="d-flex gap-2">
              <Button variant="outline-secondary">
                <FaFile />
              </Button>
              <Button variant="outline-secondary">
                <CiSaveUp2 />
              </Button>
            </div>
          </div>
        </div>

        {/* Insights Section */}

        {/* Table Section */}

        <Row className="mt-4 text-center">
          {[
            {
              title: "TOTAL DEAL AMOUNT",
              value: "£1.18M",
              detail: "Average per deal: £4.09K",
            },
            {
              title: "WEIGHTED DEAL AMOUNT",
              value: "£616.62K",
              detail: "Average per deal: £2.13K",
            },
            {
              title: "OPEN DEAL AMOUNT",
              value: "£590.58K",
              detail: "Average per deal: £10.01K",
            },
            {
              title: "CLOSED DEAL AMOUNT",
              value: "£201.02K",
              detail: "Average per deal: £1.65K",
            },
            { title: "NEW DEAL AMOUNT", value: "£0", detail: "" },
            { title: "AVERAGE DEAL AGE", value: "22 days", detail: "" },
          ].map((item, index) => (
            <Col key={index}>
              <h5 className="fw-bold">{item.title}</h5>
              <h3 className="text-primary">{item.value}</h3>
              {item.detail && <p>{item.detail}</p>}
            </Col>
          ))}
        </Row>
        {/* Table Section */}
        <div
          className="overflow-auto pt-4 mt-2"
          style={{ whiteSpace: "nowrap" }}
        >
          <Table bordered className="text-center">
            <thead className="bg-light">
              <tr>
                <th>Qualified</th>
                <th>Contact Made</th>
                <th>Meeting Scheduled</th>
                <th>Quoting</th>
                <th>Quoted</th>
                <th>Closed One</th>
                <th>Closed Lost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to={all_routes.dealscard}>
                    <div className="d-flex flex-column align-items-start">
                      <span>StraightIn Lead</span>
                      <Button
                        size="sm"
                        variant="outline-primary"
                        className="mt-2"
                      >
                        Add Contact
                      </Button>
                      <small className="text-muted mt-2">
                        No activity for 9 days
                      </small>
                    </div>
                  </Link>
                </td>
                <td>No activity</td>
                <td>No activity</td>
                <td>No activity</td>
                <td>No activity</td>
                <td>No activity </td>
                <td>No activity </td>
              </tr>
            </tbody>
            <tfoot className="bg-light">
              <tr>
                <td>Total: £0</td>
                <td>Total: £0</td>
                <td>Total: £0</td>
                <td>Total: £0</td>
                <td>Total: £0</td>
                <td>Total: £0</td>
                <td>Total: £0</td>
              </tr>
            </tfoot>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default DealsKanban;
