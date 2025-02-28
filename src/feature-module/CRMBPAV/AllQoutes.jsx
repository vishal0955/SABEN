import React, { useState } from "react";
import QuotesTable from "./QuotesTable";
import CompaniesCard from "./CompaniesCard";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Nav,
  Table,
  Dropdown,
} from "react-bootstrap";

const columns = (onSelectCompany) => [
  {
    title: "Quote",
    dataIndex: "qoute",
    render: (text, record) => (
      <div 
        className="d-flex align-items-center file-name-icon"
        style={{ cursor: "pointer", color: "#26a0fc" }}
        onClick={() => onSelectCompany(record)}
      >
        <div className="ms-2">
          <h6 className="fw-medium">{text}</h6>
          <span className="fs-12 fw-normal">{record.Roll}</span>
        </div>
      </div>
    ),
    sorter: (a, b) => a.qoute.length - b.qoute.length,
  },
  {
    title: "Quote Amount",
    dataIndex: "quoteAmount",
    sorter: (a, b) => a.quoteAmount.length - b.quoteAmount.length,
  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: (a, b) => a.status.length - b.status.length,
  },
  {
    title: "Quote Owner",
    dataIndex: "quoteOwner",
  },
  {
    title: "Create Date",
    dataIndex: "createDate",
  },
];

const data = [
  { id: 123, qoute: "murtaza rasool", quoteAmount: "300$", status: "pending status (0/1)", quoteOwner: "rose joy", createDate: "12-02-2025: 12-23 GMT" },
  { id: 33, qoute: "Abdul", quoteAmount: "300$", status: "pending status (0/1)", quoteOwner: "rony roy", createDate: "12-02-2025: 12-23 GMT" },
  { id: 7, qoute: "Mujtaba", quoteAmount: "300$", status: "pending status (0/1)", quoteOwner: "rony roy", createDate: "12-02-2025: 12-23 GMT" },
  { id: 25, qoute: "Khair", quoteAmount: "300$", status: "pending status (0/1)", quoteOwner: "rose joy", createDate: "12-02-2025: 12-23 GMT" },
  { id: 40, qoute: "Punnet", quoteAmount: "300$", status: "pending status (0/1)", quoteOwner: "rony roy", createDate: "12-02-2025: 12-23 GMT" },
  { id: 29, qoute: "Nizam", quoteAmount: "300$", status: "pending status (0/1)", quoteOwner: "rose joy", createDate: "12-02-2025: 12-23 GMT" },
  { id: 42, qoute: "Tamim", quoteAmount: "300$", status: "pending status (0/1)", quoteOwner: "rony roy", createDate: "12-02-2025: 12-23 GMT" },
  { id: 64, qoute: "Yajat", quoteAmount: "300$", status: "pending status (0/1)", quoteOwner: "rose joy", createDate: "12-02-2025: 12-23 GMT" },
];

function AllQuotes() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <div className="page-wrapper">
      <div className="main-container">
        {selectedCompany ? (
          <div>
            {/* <button className="btn btn-info mb-3" onClick={() => setSelectedCompany(null)}>
              ← Back to Quotes
            </button> */}
            <CompaniesCard company={selectedCompany} />
          </div>
        ) : (
          <>
            <div className="container-fluid">
              <header className="d-flex justify-content-between align-items-center">
                <div className="align-items-center">
                  <h4 className="contacts-title" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    Quotes
                  </h4>
                </div>
                <div className="header-actions d-flex align-items-center gap-3">
                  <button className="btn btn-outline-secondary" style={{ fontWeight: "700", color: "#26a0fc", borderColor: "#26a0fc", borderRadius: "4px" }}>
                    Actions <i className="bi bi-chevron-down"></i>
                  </button>
                  <button className="btn btn-create px-4" style={{ color: "#ffffff", backgroundColor: "#5db9cb", fontWeight: "500", borderRadius: "4px" }}>
                    Create Quotes
                  </button>
                </div>
              </header>
            </div>
            <Row className="mt-4 text-center mt-2 mb-2">
          {[
            { title: "Total Amount Of Quotes.", value: "£1.18M", detail: "Average per deal: £4.09K" },
            { title: "Quotes Per Status", value: "£616.62K", detail: "Average per deal: £2.13K" },
            { title: "OPEN DEAL AMOUNT", value: "£590.58K", detail: "Average per deal: £10.01K" },
            { title: "All Amount of Quotes", value: "£201.02K", detail: "Average per deal: £1.65K" },
            { title: "New Quotes", value: "£0", detail: "" },
            { title: "Quotes Amount Status", value: "22 days", detail: "" },
          ].map((item, index) => (
            <Col key={index}>
              <h5 className="fw-bold">{item.title}</h5>
              <h3 className="text-primary">{item.value}</h3>
              {item.detail && <p>{item.detail}</p>}
            </Col>
          ))}
        </Row>
            <div className="card-body p-0">
              <QuotesTable dataSource={data} columns={columns(setSelectedCompany)} Selection={true} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AllQuotes;
