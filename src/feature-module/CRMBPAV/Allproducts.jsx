import React from "react";
import './App.css';
import { Link } from "react-router-dom";

const Allproducts = () => {
  return (
    <div className="page-wrapper">
      <>
        <div className="container-fluid mt-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle text-secondary"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className=" fw-bold text-info">Products</span>
              </button>
              <ul
                className="dropdown-menu dropdown-menu"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a className="dropdown-item active" href="#">
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
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex">
              <div className="dropdown me-2">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    borderColor: "#0080A0",
                    borderWidth: 2,
                    color: "#0080A0",
                    borderRadius: 5,
                  }}
                >
                  Action
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
              <button
                className="btn me-2"
                type="button"
                style={{
                  borderColor: "#0080A0",
                  borderWidth: 2,
                  color: "#0080A0",
                  borderRadius: 5,
                }}
              >
                Import
              </button>
              <button
                className="btn me-2 text-white"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{
                  backgroundColor: "#0080A0",
                  borderWidth: 2,
                  borderRadius: 5,
                }}
              >
                Create Product
              </button>
            </div>
          </div>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div
                  className="modal-header"
                  style={{ backgroundColor: "#19b6bf" }}
                >
                  <h5 className="modal-title text-white" id="exampleModalLabel">
                    Create Product
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <span className="d-flex justify-content-end my-4">
                    <a
                      href="#"
                      className="fw-semibold text-info"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      Edit this from{" "}
                      <i className="fa-solid fa-arrow-up-right-from-square text-secondary" />
                    </a>
                  </span>
                  <form className="mx-2">
                    <div className="mb-3">
                      <label htmlFor="productName" className="form-label">
                        Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="productName"
                        required=""
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="sku" className="form-label">
                        SKU
                      </label>
                      <input type="text" className="form-control" id="sku" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="description"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="billingFrequency" className="form-label">
                        Billing Frequency
                      </label>
                      <select className="form-select" id="billingFrequency">
                        <option selected="">One-time</option>
                        <option>Recurring</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="term" className="form-label">
                        Term
                      </label>
                      <input type="text" className="form-control" id="term" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="productType" className="form-label">
                        Product Type
                      </label>
                      <select className="form-select" id="productType">
                        <option selected="">Physical</option>
                        <option>Digital</option>
                        <option>Service</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="url" className="form-label">
                        URL
                      </label>
                      <input type="url" className="form-control" id="url" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="unitCost" className="form-label">
                        Unit Cost
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="unitCost"
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button
                        type="submit"
                        className="btn me-2 p-3"
                        style={{ backgroundColor: "aliceblue" }}
                      >
                        Create Product
                      </button>
                      <button
                        type="submit"
                        className="btn me-2 p-3"
                        style={{ backgroundColor: "aliceblue" }}
                      >
                        Create and add another
                      </button>
                      <button
                        type="button"
                        className="btn btn-cancel"
                        data-bs-dismiss="modal"
                        style={{
                          borderColor: "#ff846b",
                          borderWidth: 2,
                          color: "#ff846b",
                          borderRadius: 5,
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-4" />
          {/* <div className="row mb-4">
            <div className="col-md-4 d-flex justify-content-between">
              <span>
                <p>All products</p>
              </span>
              <span>
                <i
                  className="fa-solid fa-xmark"
                  style={{ cursor: "pointer" }}
                />
              </span>
            </div>
            <div className="col-md-4">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ControlLabs"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  style={{ backgroundColor: "rgb(249, 253, 255)" }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <span className="fw-bold">
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "rgb(13 202 230)" }}
                >
                  <span>
                    <i className="fa-solid fa-plus text-secondary mx-3" />
                  </span>
                  Add view (2/50)
                </a>
              </span>
              <span className="fw-bold ms-5">
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "rgb(13 202 230)" }}
                >
                  All views
                </a>
              </span>
            </div>
          </div> */}
          <div className="row mb-4">
            <div className="col-md-6 d-flex">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle text-secondary"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className=" fw-bold text-info">Create data</span>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a className="dropdown-item active" href="#">
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
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
              <span className="fw-bold mt-2">
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "rgb(13 202 230)" }}
                >
                  <span>
                    <i className="fa-solid fa-plus text-secondary ms-3 me-1" />
                  </span>
                  More
                </a>
              </span>
              <span className="fw-bold mt-2">
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "rgb(13 202 230)" }}
                >
                  <span>
                    <i className="fa-solid fa-bars-staggered text-secondary ms-5 me-2" />
                  </span>
                  Advanced filters
                </a>
              </span>
            </div>
            <div className="col-md-6 text-end">
              <span
                style={{
                  backgroundColor: "rgb(227, 231, 235)",
                  padding: "3px 6px",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
              >
                <i className="fa-solid fa-reply" />
              </span>
              <span style={{ cursor: "pointer" }}>
                <i className="fa-regular fa-file mx-2" />{" "}
              </span>
              <span
                style={{
                  backgroundColor: "rgb(227, 231, 235)",
                  padding: "3px 6px",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
              >
                <i className="fa-solid fa-print ms-1" />
              </span>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <form className="d-flex">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search name, description"
                      aria-label="Search"
                    />
                  </form>
                </div>
                <div className="col-12 col-md-8 text-md-end">
                  <button
                    type="button"
                    className="btn btn-outline-secondary text-secondary mb-2 mb-md-0"
                    style={{ backgroundColor: "#fff" }}
                  >
                    Export
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary text-secondary ms-md-2"
                    style={{ backgroundColor: "#fff" }}
                  >
                    Edit columns
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead className="table-light">
                    <tr>
                      <th>
                        <input type="checkbox" />
                      </th>
                      <th>Name</th>
                      <th>SKU</th>
                      <th>Create Date (GMT)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>Administration Per Hour</td>
                      <td>ADMINISTRATION-HOUR</td>
                      <td>6 Dec 2024 15:46 GMT</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>[ControlLabs] Commissioning-Hour</td>
                      <td>Commissioning-Hour</td>
                      <td>6 Dec 2024 12:04 GMT</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>Control &amp; Automation Consultant</td>
                      <td>Control-Automation-Consultant</td>
                      <td>6 Dec 2024 10:49 GMT</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>Product Name 6</td>
                      <td>Product Name 6</td>
                      <td>11 Nov 2024 10:50 GMT</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>Product Name 5</td>
                      <td>Product Name 5</td>
                      <td>11 Nov 2024 10:45 GMT</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>Product Name 3</td>
                      <td>Product Name 3</td>
                      <td>11 Nov 2024 10:43 GMT</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Bootstrap 5 JS */}
      </>
    </div>
  );
};

export default Allproducts;
