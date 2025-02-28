import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { all_routes } from "../router/all_routes";
import { Link } from "react-router-dom";
import HomeIncoming2 from "./HomeIncoming2";
import SalesOverview2 from "./SalesOverview2";
import CashFlowProjection from "./CashFlowProjection";

const HomeIncoming = () => {
  const data = [
    {
      title: "Total Invoice",
      amount: "$3,237.94",
      percentage: "+32.40%",
      progress: 80,
      progressColor: "#ff4081",
      textColor: "text-success",
    },
    {
      title: "Outstanding",
      amount: "$3,237.94",
      percentage: "-4.40%",
      progress: 60,
      progressColor: "#9c27b0",
      textColor: "text-danger",
    },
    {
      title: "Draft",
      amount: "$3,237.94",
      percentage: "+12%",
      progress: 50,
      progressColor: "#ffb300",
      textColor: "text-success",
    },
    {
      title: "Total Overdue",
      amount: "$3,237.94",
      percentage: "-15.40%",
      progress: 30,
      progressColor: "#f44336",
      textColor: "text-danger",
    },
  ];
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const barChartData = {
    labels: ["Dec", "Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Money Coming In",
        data: [123, 234, 345, 456, 567, 678],
        backgroundColor: "rgba(57, 140, 228, 0.6)",
        borderColor: "rgba(0, 123, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#555" } },
      y: { grid: { color: "#eaeaea" }, ticks: { color: "#555" } },
    },
  };

  return (
    <div className="page-wrapper">
      <div className="container ">
      {/* Finance Overview Header */}
      <div
        className="p-4 rounded shadow-sm mb-4"
        style={{ backgroundColor: "#f9f9f9" }}
      >

<div className="mb-4">
        <h2 className="mb-3">Sales Overview</h2>

        <div className="d-flex justify-content-between align-items-center mb-4">
          {/* Left Buttons */}
          <div className="d-flex">
          <div className="dropdown">
  <button
    className="btn btn-primary dropdown-toggle me-2"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
  + New
  </button>
  <ul className="dropdown-menu">
    <li>
      <Link to={all_routes.allquotes} className="dropdown-item">
      Quote
      </Link>
    </li>
    <li>
      <Link to={all_routes.allquotes} className="dropdown-item">
      Statement
      </Link>
    </li>
    <li>
      <Link to={all_routes.allpayments} className="dropdown-item">
      Payment Link
      </Link>
    </li>
    <li>
      <Link to={all_routes.allinvoices} className="dropdown-item" >
      Invoice
      </Link>
    </li>
     <div className="dropdown-divider"></div>
            <li className="dropdown-item disabled ">Invoice to Contact Group</li>
            <li className="dropdown-item"> Add Contact Group </li>
  </ul>
</div> 
            <button className="btn  me-2 bg-white" style={{color:"#00ADB3" , border:"1px solid grey"}}>Send Statements</button>
            <button className="btn bg-white" style={{color:"#00ADB3" , border:"1px solid grey"}}>Import</button>
          </div>
          {/* Right Buttons */}
          <button className="btn btn-primary">
            Search <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
       
      </div>

      {/* Dashboard Cards */}
      <div className="row g-3 mb-4">
        {data.map((card, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <Link to ={all_routes.homeincoming}>
            <div
              className="p-3 rounded shadow-sm"
              style={{ backgroundColor: "#fff", border: "1px solid #f0f0f0" }}
            >
             
              <h6 className="text-muted">{card.title}</h6>
              <h2 className="fw-bold text-dark">{card.amount}</h2>
              <div
                style={{
                  height: "6px",
                  backgroundColor: "#e0e0e0",
                  borderRadius: "3px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${card.progress}%`,
                    backgroundColor: card.progressColor,
                    height: "6px",
                    transition: "width 0.3s ease",
                  }}
                ></div>
              </div>
              <p className={`${card.textColor} mt-2`}>
                ~ {card.percentage} from last month
              </p>
            </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Charts and Additional Info */}
      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <div className="p-3 rounded shadow-sm">
            <h6>Money Coming In</h6>
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 rounded shadow-sm">
            <h6>Customers Owing the Most</h6>
            <ul className="list-unstyled">
              <li>Client X: £123</li>
              <li>Client Y: £234</li>
              <li>Client Z: £345</li>
              <li>Client A: £456</li>
              <li>Client B: £567</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quotes Section */}
      <div className="row g-3">
        {["Draft", "Sent", "Accepted", "Expired"].map((status, index) => (
          <div className="col-md-3" key={index}>
            <div className="text-center p-3 rounded shadow-sm">
              <h6>{status}</h6>
              <h3>£1234</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    <HomeIncoming2 />
    <CashFlowProjection />
 
    </div>
  );
};

export default HomeIncoming;