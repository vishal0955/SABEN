import React from "react";
import Chart from "react-apexcharts";
import { all_routes } from "../router/all_routes";
import { Link } from "react-router-dom";
import OutgoingsOverview from './OutgoingsOverview';


const AccountsPayable = () => {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      backgroundColor: "#f7f8fa",
      minHeight: "100vh",
    },
    header: {
     
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
    },
    button: {
      padding: "8px 16px",
      fontSize: "14px",
      backgroundColor: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "all 0.2s ease",
      color:"#26a0fc"
    },
    content: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
    },
    summaryCards: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    card: {
      flex: 1,
      backgroundColor: "#fff",
      borderRadius: "8px",
      padding: "16px",
      textAlign: "center",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
      
    },
    justfiy:{
        justifyContent:"space-between"
    },
    cardTitle: {
      fontSize: "14px",
      marginBottom: "8px",
      color: "#666",
    },
    cardValue: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "8px",
    },
    cardChange: {
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "4px",
    },
    progressBarContainer: {
      height: "6px",
      borderRadius: "4px",
      backgroundColor: "#e0e0e0",
      margin: "10px 0",
      overflow: "hidden",
    },
    progressBar: {
      height: "100%",
      borderRadius: "4px",
    },
    expenseClaims: {
      display: "flex",
      gap: "20px",
      color: "#26a0fc"
    },
    chart: {
      flex: 1,
      backgroundColor: "#fff",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    },
    expenseStats: {
      flex: 1,
      backgroundColor: "#fff",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    },
    expensesGraph: {
      backgroundColor: "#fff",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    },
  };

  const summaryCards = [
    { title: "Total Invoice", value: "$3,237.94", change: "+32.40%", progress: 32.4, color: "#1a73e8" },
    { title: "Outstanding", value: "$3,237.94", change: "-4.40%", progress: 4.4, color: "#e91e63" },
    { title: "Draft", value: "$3,237.94", change: "+12%", progress: 12, color: "#ffb300" },
    { title: "Total Overdue", value: "$3,237.94", change: "-15.40%", progress: 15.4, color: "#f44336" },
  ];

  const billsChartOptions = {
    chart: { type: "bar" },
    xaxis: { categories: ["Older", "15-21 Dec", "29 Dec-4 Jan", "5-11 Jan", "Future"] },
    tooltip: { theme: "light" },
  };

  const billsChartData = [{ data: [0, 0, 3, 1, 0] }];

  const expensesChartOptions = {
    chart: { type: "area" },
    xaxis: { categories: ["Dec", "Feb", "Apr", "Jun", "Aug", "Oct"] },
    tooltip: { theme: "light" },
  };

  const expensesChartData = [{ name: "Expenses", data: [10000, 15000, 20000, 35000, 60000, 40000] }];

  return (
    <div className="page-wrapper">
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Outgoings Overview</h1>
        <div style={{display:"flex",  justifyContent:"space-between"}}><div style={styles.buttonGroup}>
          <button
    className="btn btn-primary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
  + New
  </button>
  <ul className="dropdown-menu">
    <li>
      <Link to={all_routes.allbills} className="dropdown-item">
      Bills
      </Link>
    </li>
    <li>
      <Link to={all_routes.allcreditnote} className="dropdown-item">
      Credit Notes
      </Link>
    </li>
    <li>
      <Link to={all_routes.allremitance} className="dropdown-item">
      Remittance Slip
      </Link>
    </li>
    <li>
      <Link to={all_routes.expenses} className="dropdown-item" >
      Expense
      </Link>
    </li>
    <li>
      <Link to={all_routes.purchaselist} className="dropdown-item" >
      Purchase Order
      </Link>
    </li>
     <div className="dropdown-divider"></div>
            <li className="dropdown-item"> Add Contact Group </li>
  </ul>
          <button style={styles.button}>Send Statements</button>
          <button style={styles.button}>Import</button>
          
        </div>
        <button style={styles.button}>Search</button></div>
      </div>

      {/* Summary Cards */}
      <Link to={ all_routes.homeincoming} >
      <div style={styles.summaryCards}>
        {summaryCards.map((card, index) => (
          <div key={index} style={styles.card}>
            <p style={styles.cardTitle}>{card.title}</p>
            <p style={styles.cardValue}>{card.value}</p>
            <div style={styles.progressBarContainer}>
              <div style={{ ...styles.progressBar, width: `${card.progress}%`, backgroundColor: card.color }}></div>
            </div>
            <p style={{ ...styles.cardChange, color: card.color }}>
              {card.change.includes("+") ? "⬆" : "⬇"} {card.change}
            </p>
          </div>
        ))}
      </div>
      </Link>

      {/* Bills Section */}
      <div style={styles.expenseClaims}>
        <div style={styles.chart}>
          <h3>Bills you need to pay</h3>
          <Chart options={billsChartOptions} series={billsChartData} type="bar" height={200} />
        </div>
        <div style={styles.expenseStats}>
          <h3>Expense claims</h3>
          <div className="d-flex" style={styles.justfiy}><button style={styles.button}>Create new expense</button>
          <ul>
            <li>No drafts: </li>
            <li>Nothing to review: </li>
            <li>6 to pay:</li>
          </ul>
          <ul>
            <li> £0.00</li>
            <li> £0.00</li>
            <li>£203.65</li>
          </ul></div>
        </div>
      </div>

      {/* Expenses Graph */}
      <div style={styles.expensesGraph}>
        <h3>Expenses</h3>
        <p>£1234 (⬆ 133.0% from last year)</p>
        <p>Cost of goods sold: £1234</p>
        <p>Operating expenses: £1234</p>
        <Chart options={expensesChartOptions} series={expensesChartData} type="area" height={200} />
      </div>
    </div>
    <OutgoingsOverview />
    </div>
  );
};

export default AccountsPayable;
