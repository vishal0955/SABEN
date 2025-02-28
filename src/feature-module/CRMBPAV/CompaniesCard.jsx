import React, { useState } from "react";
import { PiNotePencilDuotone } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { FaCalendar } from "react-icons/fa6";
import { GrTasks } from "react-icons/gr";
import { Button, Accordion, Dropdown } from "react-bootstrap";
import {
  FaChevronRight,
  FaChevronDown,
  FaExternalLinkAlt,
} from "react-icons/fa";
// import './crm.css'
// import ContactListHead from './ContactListHead'

const CompaniesCard = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="d-flex align-items-center">
            <button
              style={{
                border: "none",
                background: "none",
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
          <div className="d-flex align-items-center justify-content-center borderlessed">
            <button>set up Payment</button>
          </div>
        </div>
      ),
    },

    {
      title: 'Payment {""}',
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              Automate subscription management and recurring billing from this
              record.
            </span>
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
  ];
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-3">
          {/* Sidebar */}
          <div className="col-md-3  mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <div className="mb-3 d-flex justify-content-between">
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle text-info fw-semibold"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Actions
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
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
                      <h5 className="mb-1">zohoinvoice.com</h5>
                      <a
                        href="#"
                        className="text-decoration-none text-info fw-semibold"
                      >
                        zohoinvoice.com
                      </a>
                    </div>
                  </div>

                  <div className="mt-4 d-flex mx-3">
                    <span className="me-2">
                      <PiNotePencilDuotone />
                      <br />
                      <span style={{ fontSize: 12 }}>Notes</span>
                    </span>
                    <span className="me-2">
                      <MdEmail />
                      <br />
                      <span style={{ fontSize: 12 }}>Email</span>
                    </span>
                    <span className="me-2">
                      <IoCall />
                      <br />
                      <span style={{ fontSize: 12 }}>Call</span>
                    </span>
                    <span className="me-2">
                      <GrTasks />
                      <br />
                      <span style={{ fontSize: 12 }}>Task</span>
                    </span>
                    <span className="me-2">
                      <FaCalendar />
                      <br />
                      <span style={{ fontSize: 12 }}>Meeting</span>
                    </span>
                    <span className="me-2">
                      <IoIosMore />
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
                            <label className="form-label">
                              Companies admin name
                            </label>
                            <p>hubspot.com</p>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Industry</label>
                            <input
                              type="text"
                              className="form-control border-0 border-bottom"
                              placeholder="Phone number"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Company Owner</label>
                            <input
                              type="text"
                              className="form-control border-0 border-bottom"
                              defaultValue="HubSpot"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Type</label>
                            <select className="form-select border-0 border-bottom">
                              <option>Open </option>
                              <option>In Progress</option>
                              <option>Open Deal</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">City</label>
                            <select className="form-select border-0 border-bottom">
                              <option>Lead</option>
                              <option>Customer</option>
                              <option>Opportunity</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">State /Region</label>
                            <select className="form-select border-0 border-bottom">
                              <option>Blocker</option>
                              <option>Budget Holder</option>
                              <option>Champion</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Postal Code</label>
                            <select className="form-select border-0 border-bottom">
                              <option>--</option>
                            </select>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">
                              Number of Employee
                            </label>
                            <select className="form-select border-0 border-bottom">
                              <option>--</option>
                            </select>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h6>
                      <span>
                        <i className="fa-solid fa-chevron-right me-2 text-info" />
                      </span>{" "}
                      CRM Setting
                    </h6>
                  </div>
                </div>

                <hr />
              </div>
            </div>
          </div>
          {/* Main content */}
          <div className="col-md-6 content">
            <ul className="nav nav-tabs mt-3">
              <li className="nav-item">
                <button
                  className="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#overview"
                >
                  Overview
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#activities"
                >
                  Activities
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#intelligence"
                >
                  Intelligence
                </button>
              </li>
            </ul>
            <div className="tab-content">
              {/* Overview Tab */}
              <div className="tab-pane fade show active" id="overview">
                <div className="card shadow-sm p-3">
                  <div className=" d-flex justify-content-between my-2">
                    <h6 className="fw-bold">Company Summary</h6>
                    <span>
                      <i className="fa-solid fa-gear rounded bg-light p-2 border fs-6" />
                    </span>
                  </div>
                  <hr />
                  <div className="notes">
                    <h6 className="fw-semibold mb-3">
                      Company summary notes{" "}
                      <span>
                        <i className="fa-solid fa-circle-info ms-2 text-secondary" />
                      </span>
                    </h6>
                    <textarea
                      className="form-control mb-3 bg-light"
                      defaultValue={""}
                    />
                  </div>
                  <hr />
                  <div className="d-flex">
                    <h6 className="fw-semibold">
                      Frequently Contacted{" "}
                      <span>
                        <i className="fa-solid fa-circle-info ms-2 text-secondary" />
                      </span>
                    </h6>
                    <span className="ms-4 text-info fw-semibold">
                      Nikunj{" "}
                      <span>
                        <i className="fa-solid fa-arrow-up-right-from-square text-secondary" />
                      </span>
                    </span>
                  </div>
                  <hr />
                  <div className="mt-3">
                    <h6>Company Profile</h6>
                    <p>
                      <span className="text-secondary">Lifecycle stage</span>
                      <span className="ms-5">
                        Lead for 2 days{" "}
                        <a
                          href="#"
                          className="text-decoration-none text-info fw-semibold"
                        >
                          History details{" "}
                          <span>
                            <i className="fa-solid fa-chevron-right text-secondary fs-6" />
                          </span>
                        </a>
                      </span>
                    </p>
                  </div>
                  <hr />
                  <div className="mt-3 d-flex">
                    <h6 className="fw-semibold">Products</h6>
                    <p className="text-secondary ms-5">
                      No products yet. Try adding products to your{" "}
                      <a
                        href="#"
                        className="text-decoration-none fw-semibold text-info"
                      >
                        deals
                      </a>
                      . <br />
                      <span className="text-center">
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                      </span>
                    </p>
                  </div>
                  <hr />
                  <div className="mt-3 d-flex">
                    <h6>
                      Key Tickets{" "}
                      <span>
                        <i className="fa-solid fa-circle-info text-secondary ms-2" />
                      </span>
                    </h6>
                    <p className="ms-5 text-secondary">
                      No key tickets assigned yet.
                    </p>
                  </div>
                </div>
                <div className="card shadow-sm p-3 mt-3">
                  <h6 className="fw-bold">
                    Company research insights{" "}
                    <span className="badge-beta">BETA</span>
                  </h6>
                  <div className="d-flex flex-wrap justify-content-center justify-content-md-between mx-3 mt-3">
                    <button className="btn btn-outline-secondary rounded-pill px-4 py-2 btn-sm fw-bold me-2 mt-2">
                      Retrieve Company
                    </button>
                    <button className="btn btn-outline-secondary rounded-pill px-4 py-2 btn-sm fw-bold me-2 mt-2">
                      Find Company
                    </button>
                    <button className="btn btn-outline-secondary rounded-pill px-4 py-2 btn-sm fw-bold mt-2">
                      List Tech this Com...
                    </button>
                  </div>
                </div>
                <div className="card shadow-sm p-3 mt-3">
                  <h6 className="fw-bold">Customer spend trends</h6>
                  <div className="mt-3">
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="reportType" className="form-label">
                          Report type{" "}
                          <span>
                            <i className="fa-solid fa-circle-info text-secondary" />
                          </span>
                        </label>
                        <select
                          id="reportType"
                          className="form-select mb-3 bg-light"
                        >
                          <option>Revenue Trend Line</option>
                          <option>Spending Summary</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="dateRange" className="form-label">
                          Date Range
                        </label>
                        <select id="dateRange" className="form-select bg-light">
                          <option>All Time</option>
                          <option>Last 6 Months</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Other tabs */}
              <div className="tab-pane fade" id="activities">
                Activities content...
              </div>
              <div className="tab-pane fade" id="intelligence">
                Intelligence content...
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
    </div>
  );
};

export default CompaniesCard;
