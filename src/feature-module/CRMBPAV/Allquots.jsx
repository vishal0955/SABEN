import React from "react";

import "./App.css";

const Allquots = () => {
  return (
    <div className="page-wrapper">
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-ems-center mb-3">
          <h5 className="fw-bold ">Quotes</h5>
          <div className="d-flex">
            <div className="dropdown me-2">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  borderColor: "#ff846b",
                  borderWidth: 2,
                  color: "#ff846b",
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
              className="btn me-2 text-white"
              type="button"
              style={{
                backgroundColor: "#ff846b",
                borderWidth: 2,
                borderRadius: 5,
              }}
            >
              Create quote
            </button>
          </div>
        </div>
        <hr className="mt-2" />
        <div className="card">
          <div className="card-header" style={{ backgroundColor: "#fff" }}>
            <div
              className="row"
              style={{
                backgroundColor: "#fff",
                border: "2px soild #dee2e6",
                borderRadius: 5,
                padding: 15,
              }}
            >
             
              <div className="col-md-4 mt-4">
                <form className="d-flex">
                  <input
                    className="form-control me-2 p-2"
                    type="search"
                    placeholder="Search all quotes"
                    aria-label="Search"
                    style={{ backgroundColor: "#ebfaff" }}
                  />
                </form>
              </div>
              <div className="col-md-1">
                <div className="d-flex align-items-baseline">
                  <span>Status:</span>
                  <div className="dropdown d-flex justify-content-start align-items-start">
                    <button
                      className="btn dropdown-toggle text-secondary fw-bold"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="text-info">All</span>
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
              </div>
              <div className="col-md-2 ms-2">
                <div className="d-flex align-items-baseline">
                  <span>Owners:</span>
                  <div className="dropdown d-flex justify-content-start align-items-start">
                    <button
                      className="btn dropdown-toggle text-secondary fw-bold"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="text-info">All user</span>
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
              </div>
              <div className="col-md-3">
                <div className="d-flex align-items-baseline">
                  <span>Archive status:</span>
                  <div className="dropdown d-flex justify-content-start align-items-start">
                    <button
                      className="btn dropdown-toggle text-secondary fw-bold"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="text-info">Active</span>
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
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="table-light">
                  <tr>
                    <th>Quote</th>
                    <th>
                      Quote Amount{" "}
                      <span className="text-secondary ms-2">
                        <i className="fa-solid fa-circle-info" />
                      </span>
                    </th>
                    <th>Status</th>
                    <th>Quote Owner</th>
                    <th>Create Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Example 1</td>
                    <td>£1</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        Pending signature (0/1)
                      </span>
                    </td>
                    <td>
                      <img
                        src="https://via.placeholder.com/30"
                        className="rounded-circle me-2"
                      />{" "}
                      Benjamin Price
                    </td>
                    <td>Today at 23:17</td>
                  </tr>
                  <tr>
                    <td>Example 2</td>
                    <td>£14</td>
                    <td>
                      <span className="badge bg-warning text-dark">
                        Pending signature (0/1)
                      </span>
                    </td>
                    <td>
                      <img
                        src="https://via.placeholder.com/30"
                        className="rounded-circle me-2"
                      />{" "}
                      Benjamin Price
                    </td>
                    <td>20 Dec 2024</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
            <nav className="mt-2">
              <div className="d-flex justify-content-center align-items-center">
                <p className="mb-0">
                  <span className="text-secondary fw-semibold">
                    <span>
                      <i className="fa-solid fa-chevron-left mx-2" />
                    </span>
                    Prev
                  </span>{" "}
                  <button
                    type="button"
                    className="btn btn-outline-info mx-2 fw-bold"
                  >
                    1
                  </button>
                  <span className="me-2 text-info fw-bold">2</span>
                  <span className="me-2 text-info fw-bold">3</span>
                  <span className="me-2 text-info fw-bold">4</span>
                  <span className="me-2 text-info fw-bold">5</span>
                  <span className="me-2 text-info fw-bold">6</span>
                  <span className="me-2 text-info fw-bold">7</span>
                  <span className="text-info fw-semibold">
                    Next
                    <span>
                      <i className="fa-solid fa-chevron-right" />
                    </span>
                  </span>
                </p>
                <div className="dropdown">
                  <button
                    className="btn text-info fw-bold dropdown-toggle ms-4"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    25 per page
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a className="dropdown-item active" href="#">
                        20 per page
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        30 per page
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        50 per page
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        70 per page
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Bootstrap Bundle with Popper */}
    </div>
  );
};

export default Allquots;
