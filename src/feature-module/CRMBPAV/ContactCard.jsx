import React, { useState } from "react";
import { Button, Accordion, Dropdown } from "react-bootstrap";
import {
  FaChevronRight,
  FaChevronDown,
  FaExternalLinkAlt,
} from "react-icons/fa";

const ContactCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activities = [
    {
      date: "24 Dec 2024 at 11:48 GMT",
      user: "Andrew Ashraf",
      action:
        "moved ticket Invoice - INV-0000214 from InsightAV CAD Services Private Limited For Date 9/12/24 Reddy Vineyard CAD Drawings",
      status: "Closed",
    },
    {
      date: "24 Dec 2024 at 11:48 GMT",
      user: "Andrew Ashraf",
      action:
        "moved ticket Invoice - INV-0000215 from InsightAV CAD Services Private Limited For 19/12/24 CAD Drawings",
      status: "Closed",
    },
    {
      date: "23 Dec 2024 at 17:40 GMT",
      user: "Andrew Ashraf",
      action:
        "Ticket Invoice - INV-0000215 from InsightAV CAD Services Private Limited For 19/12/24 CAD Drawings",
      status: "moved to New by Conversations",
    },
    {
      date: "23 Dec 2024 at 17:40 GMT",
      user: "Andrew Ashraf",
      action:
        "Ticket Invoice - INV-0000215 from InsightAV CAD Services Private Limited For 19/12/24 CAD Drawings",
      status: "created by Conversations",
    },
  ];

  const menuItems = [
    {
      title: "Companies (1)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="badge bg-primary me-2">Primary</span>
            <span className="fw-bold">zohoinvoice.com</span>
          </div>
          <div className="d-flex align-items-center">
            <a
              href="https://sender.zohoinvoice.com"
              className="text-decoration-none text-info"
              target="_blank"
              rel="noopener noreferrer"
            >
              sender.zohoinvoice.com <FaExternalLinkAlt className="ms-1" />
            </a>
          </div>
          <p className="mt-2 mb-0">Phone: --</p>
        </div>
      ),
    },
    {
      title: "Contact (0)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              See the people associated with this record.
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Leads (0)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="badge bg-primary me-2">Primary</span>
            <span className="fw-bold">zohoinvoice.com</span>
          </div>
          <div className="d-flex align-items-center">
            <a
              href="https://sender.zohoinvoice.com"
              className="text-decoration-none text-info"
              target="_blank"
              rel="noopener noreferrer"
            >
              sender.zohoinvoice.com <FaExternalLinkAlt className="ms-1" />
            </a>
          </div>
          <p className="mt-2 mb-0">Phone: --</p>
        </div>
      ),
    },

    {
      title: "Deals (0)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              Track the revenue opportunities associated with this record.
            </span>
          </div>
        </div>
      ),
    },

    {
      title: "Tickets (2)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              Track the customer requests associated with this record.
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Invoice (0)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              Send your customer a request for payment and associate it with
              this record.
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <button
              style={{
                border: "none",
                
                color: "blue",
                cursor: "pointer",
              }}
            >
              Set up Payment
            </button>
          </div>
        </div>
      ),
      dropdown: (
        <Dropdown>
          <Dropdown.Toggle
            variant="link"
            className="p-0 text-secondary fw-bold"
          >
            Add
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
    },

    {
      title: "Health Score",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              See the people associated with this record.
            </span>
          </div>
        </div>
      ),
    },

    {
      title: "Lead Score",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              See the people associated with this record.
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Payment (0)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              Give customers a fast, flexible way to pay. Add a payment link to
              accept a payment and associate it with this record.
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-center ">
            <button style={{
                border: "none",
                
                color: "blue",
                cursor: "pointer",
              }}>set up Payment</button>
          </div>
        </div>
      ),
    },

    
  ];

  return (
    <div className="container-fluid">
      <div className="row mt-3">
        {/* Sidebar */}
        <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="mb-3 d-flex justify-content-between">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle text-info fw-semibold"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    Actions
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Send Email
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Call
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Send Text
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Go On This Linked
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Send Whatsapp essage
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-3 text-center">
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <img
                      src="https://i.ibb.co/zTFjy386/user.png"
                      alt="user"
                      className="rounded-circle"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                  <div>
                    <h5>Nikunj</h5>
                    <a
                      href="#"
                      className="text-decoration-none text-info fw-semibold"
                    >
                      zohoinvoice.com
                    </a>
                    <p>Nikunj@zoho.com</p>
                  </div>
                </div>

                <div className="mt-4 d-flex justify-content-center flex-wrap">
                  <span className="me-2">
                    <i className="fa-solid fa-pen-to-square rounded-circle p-2 border bg-light" />{" "}
                    <br />
                    <span style={{ fontSize: 12 }}>Notes</span>
                  </span>
                  <span className="me-2">
                    <i className="fa-solid fa-envelope rounded-circle p-2 border bg-light" />{" "}
                    <br />
                    <span style={{ fontSize: 12 }}>Email</span>
                  </span>
                  <span className="me-2">
                    <i className="fa-solid fa-phone rounded-circle p-2 border bg-light" />{" "}
                    <br />
                    <span style={{ fontSize: 12 }}>Call</span>
                  </span>
                  <span className="me-2">
                    <i className="fa-solid fa-clipboard rounded-circle p-2 border bg-light" />{" "}
                    <br />
                    <span style={{ fontSize: 12 }}>Task</span>
                  </span>
                  <span className="me-2">
                    <i className="fa-solid fa-calendar-days rounded-circle p-2 border bg-light" />{" "}
                    <br />
                    <span style={{ fontSize: 12 }}>Meeting</span>
                  </span>
                  <span className="me-2">
                    <i className="fa-solid fa-ellipsis rounded-circle p-2 border bg-light" />{" "}
                    <br />
                    <span style={{ fontSize: 12 }}>More</span>
                  </span>
                </div>
              </div>
              <hr />

              <div className="accordion" id="contactsAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed d-flex justify-content-between align-items-center w-100"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseAbout"
                      aria-expanded={isOpen ? "true" : "false"}
                      aria-controls="collapseAbout"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <span>About this contact</span>
                      {isOpen ? (
                        <FaChevronDown className="fs-6 text-info p-2" />
                      ) : (
                        <FaChevronRight className="fs-6 text-info p-2" />
                      )}
                    </button>
                  </h2>
                  <div
                    id="collapseAbout"
                    className={`accordion-collapse collapse ${
                      isOpen ? "show" : ""
                    }`}
                    aria-labelledby="headingAbout"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <form>
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <p>bh@hubspot.com</p>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Phone number</label>
                          <input
                            type="text"
                            className="form-control border-0 border-bottom"
                            placeholder="Phone number"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Company name</label>
                          <input
                            type="text"
                            className="form-control border-0 border-bottom"
                            defaultValue="HubSpot"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Lead status</label>
                          <select className="form-select border-0 border-bottom">
                            <option>Open </option>
                            <option>In Progress</option>
                            <option>Open Deal</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Lifecycle stage</label>
                          <select className="form-select border-0 border-bottom">
                            <option>Lead</option>
                            <option>Customer</option>
                            <option>Opportunity</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Buying Role</label>
                          <select className="form-select border-0 border-bottom">
                            <option>Blocker</option>
                            <option>Budget Holder</option>
                            <option>Champion</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Contact owner</label>
                          <select className="form-select border-0 border-bottom">
                            <option>--</option>
                           
                          </select>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed d-flex justify-content-between align-items-center w-100"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseCommunication"
                      aria-expanded="false"
                      aria-controls="collapseCommunication"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <FaChevronRight className="fs-6 text-info me-3 p-2" />
                      Communication Subcripation Intent
                      {isOpen ? (
                        <FaChevronDown className="fs-6 text-info p-2" />
                      ) : (
                        <FaChevronRight className="fs-6 text-info p-2" />
                      )}
                    </button>
                  </h2>
                  <div
                    id="collapseCommunication"
                    className="accordion-collapse collapse"
                    data-bs-parent="#contactsAccordion"
                  >
                    <div className="accordion-body">
                      <div className="d-flex align-items-center mb-2">
                        <span className="fw-bold">
                          Use subscription types to manage the communications
                          this contact receives from you
                        </span>
                      </div>
                      <div className="d-flex align-items-center">
                        <a
                          href="#"
                          className="text-decoration-none text-info"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View subscriptions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed d-flex justify-content-between align-items-center w-100"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseActivity"
                      aria-expanded="false"
                      aria-controls="collapseActivity"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <FaChevronRight className="fs-6 text-info me-3 p-2" />
                      Website Activity
                      {isOpen ? (
                        <FaChevronDown className="fs-6 text-info p-2" />
                      ) : (
                        <FaChevronRight className="fs-6 text-info p-2" />
                      )}
                    </button>
                  </h2>
                  <div
                    id="collapseActivity"
                    className="accordion-collapse collapse"
                    data-bs-parent="#contactsAccordion"
                  >
                    <div className="accordion-body">
                      <div className="d-flex align-items-center mb-2">
                        <span className="fw-bold">
                          Website activity shows you how many times a contact
                          has visited your site and viewed your pages
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main content */}
        <div className="col-lg-6 col-md-8 col-sm-12 ">
          {/* <h6 className="text-end text-info fw-semibold">
            <i className="fa-solid fa-gear text-secondary fs-6 me-1" /> Customize
            record
          </h6> */}
          <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
              <button
                className="nav-link active text-dark"
                data-bs-toggle="tab"
                data-bs-target="#overview"
              >
                Overview
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link text-dark"
                data-bs-toggle="tab"
                data-bs-target="#activities"
              >
                Activities
              </button>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="overview">
              <div className="card shadow-sm p-3">
                <div className=" d-flex justify-content-between ">
                  <div className="mb-2">
                    {/* Tabs */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
                      <div
                        className="input-group mb-3 mb-md-0"
                        style={{ maxWidth: "400px" }}
                      >
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search activities"
                          aria-label="Search activities"
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                        >
                          Search
                        </button>
                      </div>
                      <button className="btn btn-primary btn-sm">
                        Customize record
                      </button>
                    </div>
                    <ul
                      className="nav nav-tabs mb-3"
                      style={{
                        borderBottom: "2px solid #e9ecef",
                        fontSize: "0.95rem",
                        fontWeight: "500",
                      }}
                    >
                      <li className="nav-item">
                        <a className="nav-link" href="#activities">
                          Activities
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#notes">
                          Notes
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#emails">
                          Emails
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#calls">
                          Calls
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#tasks">
                          Tasks
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#meetings">
                          Meetings
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#meetings">
                          AI
                        </a>
                      </li>
                    </ul>

                    {/* Search Bar and Filters */}
                  </div>
                </div>

                <div>
                  <h6 className="text-secondary mb-3">December 2024</h6>
                  {activities.map((activity, index) => (
                    <div
                      key={index}
                      className="p-3 mb-2 border rounded"
                      style={{ backgroundColor: "#f9f9f9" }}
                    >
                      <p
                        className="mb-1 text-muted"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {activity.date}
                      </p>
                      <p className="mb-1" style={{ fontWeight: "bold" }}>
                        {activity.user}
                      </p>
                      <p className="mb-1">
                        {activity.action}{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {activity.status}
                        </span>
                      </p>
                      <a
                        href="#view-details"
                        className="text-primary"
                        style={{ fontSize: "0.9rem" }}
                      >
                        View details
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-md-3 bg-white shadow p-3 ">
          <Accordion defaultActiveKey="0">
            {menuItems.map((item, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>
                  <div className="d-flex align-items-center w-100 justify-content-between">
                    <div className="d-flex align-items-center">
                      <FaChevronRight
                        className="me-2"
                        style={{ color: "blue" }}
                      />
                      {item.title}
                    </div>
                    <Button variant="link" className="p-0 text-info">
                      + Add
                    </Button>
                  </div>
                </Accordion.Header>
                <Accordion.Body>{item.content}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
