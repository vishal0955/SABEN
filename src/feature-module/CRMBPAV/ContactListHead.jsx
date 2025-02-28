import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css"; // Add custom CSS file if needed
import { Container, Row, Col, Button, Form, Offcanvas, Card, Table } from "react-bootstrap";
import Datatable from "./Datatable";
// import { a } from "react-router-dom";
import QuotesTable from "./QuotesTable";
import ContactCard from "./ContactCard";


const columns = (onSelectContact)=> [
  {
    title: "Name",
    dataIndex: "Name",
    render: (text, record) => (
      <div className="d-flex align-items-center file-name-icon" 
      onClick={()=> onSelectContact(record)}>
        <a href="#" className="avatar avatar-md border avatar-rounded">
        <img   style={{
          borderRadius:"100%",
          outline:"none",
         
        }}
      src={"data:image/jpeg;base64,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"}
      height={"30px"}
      width={"30px"} 
    /> {/* <ImageWithBasePath src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVUpYTr4jbnnrs8FHhcGx8lgIH_TAaje2SNFkiOsHH37SPA9GyXKx85c&s" className="img-fluid" alt="img" /> */}
        </a>
        <div className="ms-2">
          <h6 className="fw-medium"><a href="#">{text}</a></h6>
          <span className="fs-12 fw-normal ">{record.Roll}</span>
        </div>
      </div>
    ),
    sorter: (a, b) => a.Name.length - b.Name.length,
  },
  {
    title: "Job Title",
    dataIndex: "jobtitle",
    sorter: (a, b) => a.Email.length - b.Email.length,
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: (a, b) => a.Email.length - b.Email.length,
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
    sorter: (a, b) => a.Phone.length - b.Phone.length,
  },
  {
    title: "Company Name",
    dataIndex: "company",
    sorter: (a, b) => a.Location.length - b.Location.length,
  },

]

const data = [
  { id: 123, Name: "Nikunj", jobtitle: "--",email:"vrrr@",phone:"---" , company:"zoho" },
  { id: 33, Name: "Abdul", jobtitle: "--",email:"vrrr@" ,phone:"---" , company:"--"},
  { id: 7,  Name: "Mujtaba", jobtitle: "--",email:"vrrr@" ,phone:"---" , company:"--"},
  { id: 25, Name: "Khair", jobtitle: "--",email:"vrrr@" ,phone:"---" , company:"--"},
  { id: 40, Name: "Punnet",jobtitle: "--",email:"vrrr@",phone:"8965403343" , company:"--" },
  { id: 29, Name: "Nizam", jobtitle: "Human resorces and",email:"vrrr@",phone:"---" , company:"--" },
  { id: 42, Name: "Tamim", jobtitle: "--",email:"vrrr@",phone:"---"  , company:"--"},
  { id: 64, Name: "Yajat", jobtitle: "--" ,email:"vrrr@",phone:"---" , company:"--"},
];
const ContactListHead = () => {
    const [activeTab, setActiveTab] = useState("All contacts");
    const [selectedContact, setSelectedContact] = useState(null);
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

  const tabs = [
    "All contacts",
    "Open opportunities",
    "Need follow up",
    "In progress",
    "My recently assigned c...",
  ];

  return (
    <div className="page-wrapper">
      {/* Header Section */}
      {selectedContact ? (
          <div>
            {/* <button className="btn btn-info mb-3" onClick={() => setSelectedContact(null)}>
              ← Contacts
            </button> */}
            <ContactCard company={selectedContact} />
          </div>
        ) : (
      <>
      <div className="container-fluid p-4">
      {/* Header Section */}
      <header className="d-flex justify-content-between align-items-center flex-wrap gap-3 ">
        <div className="align-items-center gap-2">
          <h4
            className="contacts-title m-0"
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            Contacts <i className="bi bi-chevron-down"></i>
          </h4>
          <span style={{ color: "#6c757d", fontSize: "1rem" }}>
            24,700 records
          </span>
        </div>
        <div className="header-actions d-flex align-items-center gap-3">
          {/* <a
            href="#"
            className="text-decoration-none"
            style={{ color: "#26a0fc", fontWeight: "500" }}
          >
            Data Quality
          </a> */}
          <button
            className="btn btn-outline-secondary"
            style={{
              fontWeight: "700",
              color:"#26a0fc",
             
              borderColor: "#26a0fc",
              fontWeight: "500",
              borderRadius:"4px"
            }}
          >
            Actions <i className="bi bi-chevron-down"></i>
          </button>
         
          <button
            className="btn btn-create px-4" onClick={handleShow}
            style={{
              color: "#ffffff",
              backgroundColor: "#5db9cb",
              fontWeight: "500",
              borderRadius: "5px",
            }}
          >
            Create contact
          </button>
          <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header className="bg-gradient-to-r from-teal-500 to-blue-600 text-white" closeButton>
          <Offcanvas.Title>Create Contact</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="First name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Last name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Job title</Form.Label>
              <Form.Control type="text" placeholder="Job title" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" placeholder="Phone number" />
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
      </header>

      {/* Filter Tabs Section */}


       <Row className="mt-4 text-center">
              {[
                { title: "TOTAL NUMBER OF CONTACT", value: "£14", detail: "" },
                { title: "NOT CONTACTED", value: "£15", detail: "" },
                { title: "NEW CONTACT THIS MONTH", value: "£10", detail: "" },
                { title: "NEW RECURRING CONTACT", value: "£5", detail: "" },
                { title: "CONTACTED", value: "£12", detail: "" },
               
              ].map((item, index) => (
                <Col key={index}>
                  <h5 className="fw-bold">{item.title}</h5>
                  <h3 className="text-primary">{item.value}</h3>
                  {item.detail && <p>{item.detail}</p>}
                </Col>
              ))}
            </Row>
      <div className="row">
        {/* Tabs */}
        <div className=" d-flex mb-4  flex-wrap ">
          {/* {tabs.map((tab, index) => (
            <div
              key={index}
              className={` py-2 ${
                activeTab === tab ? "active" : ""
              }`}
              style={{
                border: activeTab === tab ? "1px solidrgb(72, 74, 77)" : "1px solid #ccc",
                paddingRight:"80px",
                paddingLeft:"10px",
                backgroundColor:
                  activeTab === tab ? "rgba(54, 56, 58, 0.19)" : "#ffffff",
                color: activeTab === tab ? "#6c757d" : "#6c757d",
                fontSize: "1rem",
                cursor: "pointer",
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))} */}
          {/* <div className="ms-auto  d-flex">
            <button
              className="btn btn-a"
              style={{
                
                color:"#26a0fc",
              
                fontSize: "0.9rem",
                fontWeight: "500",
              }}
            >
              + Add view (5/50)
            </button>
            <button
              className="btn btn-a"
              style={{
                
              color:"#26a0fc",
             
                fontSize: "0.9rem",
                fontWeight: "500",
              }}
            >
              All views
            </button>
          </div> */}
       
        </div>

        {/* Filters */}
        <div className="d-flex" style={{justifyContent:"space-between"}}>
        <div className=" d-flex  gap-3 flex-wrap">
          <button
            className="btn btn-outline-secondary"
            style={{
              fontWeight: "700",
              color:"#26a0fc",
             border:"none"
            }}
          >
            Contact owner <i className="bi bi-chevron-down"></i>
          </button>
          {/* <button
            className="btn btn-outline-secondary"
            style={{
              fontWeight: "700",
              color:"#26a0fc",
             border:"none"
            }}
          >
            Create date <i className="bi bi-chevron-down"></i>
          </button> */}
          <button
            className="btn btn-outline-secondary"
            style={{
              fontWeight: "700",
              color:"#26a0fc",
             border:"none"
            }}
          >
            Last activity date <i className="bi bi-chevron-down"></i>
          </button>
          {/* <button
            className="btn btn-outline-secondary"
            style={{
              fontWeight: "700",
              color:"#26a0fc",
             border:"none"
            }}
          >
            Lead status <i className="bi bi-chevron-down"></i>
          </button> */}
          <button
            className="btn btn-outline-secondary"
            style={{
              fontWeight: "700",
              color:"#26a0fc",
             border:"none"

            }}
          >
            + More
          </button>
          <button
            className=""
            style={{
              fontWeight: "700",
              // color: "#007bff",
             border:"none",
             color:"#26a0fc"
            }}
          >
            <i class="bi bi-funnel"></i> Advanced filters
          </button>
        </div>
        <div class="ms-auto d-flex gap-2">
    <button type="button" class="btn btn-link">
      <i class="bi bi-arrow-counterclockwise"></i>
    </button>
    <button type="button" class="btn btn-link">
      <i class="bi bi-box-arrow-down"></i>
    </button>
  </div>
  </div>
      </div>
    </div>
      {/* Table Section */}
      <div className="card-body p-0">
              <QuotesTable dataSource={data} columns={columns(setSelectedContact)} Selection={true} />
            </div>
      </>)}
    </div>
  );
};

export default ContactListHead;