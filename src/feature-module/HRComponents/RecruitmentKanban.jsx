import React from 'react'
import { all_routes } from '../router/all_routes';
import { Link } from 'react-router-dom';
import HiringTaskCard from './HiringTaskCard';
import CollapseHeader from '../../core/common/collapse-header/collapse-header';

const Recruitment = () => {
  return (
    <div className='page-wrapper'>

<div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                           
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.homedashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">hr</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                         Recruitment kanban

                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
                            <div className="me-2 mb-2">
                                <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
                                    <Link
                                        to={all_routes.recruitment}
                                        className="btn btn-icon btn-sm me-1"
                                    >
                                           <i className="fa-solid fa-table-columns" />
                                    </Link>
                                    <Link
                                        to={all_routes.candidatelist}
                                        className="btn btn-icon btn-sm  me-1"
                                    >
                                        <i className="ti ti-list-tree" />
                                    </Link>
                                  
                                </div>
                            </div>
                            {/* <div className="me-2 mb-2">
                                <div className="dropdown">
                                    <Link
                                        to="#"
                                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                        data-bs-toggle="dropdown"
                                    >
                                        <i className="ti ti-file-export me-1" />
                                        Export
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                <i className="ti ti-file-type-pdf me-1" />
                                                Export as PDF
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                <i className="ti ti-file-type-xls me-1" />
                                                Export as Excel{" "}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            <div className="head-icons ms-2">
                            <CollapseHeader />
                            </div>
                        </div>
                    </div>


  <div className="card mt-2">
    <div className="card-header d-flex flex-wrap justify-content-between align-items-center">
      <div className="mb-2 mb-lg-0">
        <span className="fw-semibold text-secondary">
          <span>
            <i className="fa-solid fa-bars-staggered" />
          </span>{" "}
          Staff Scheduling
        </span>
        <span className="ms-3 fw-semibold text-secondary">
          <span>
            <i className="fa-solid fa-list-ul" />
          </span>{" "}
          Billing Last Week
        </span>
        
        <span className="ms-3 fw-semibold text-secondary">12 more...</span>
        <span className="ms-3 fw-semibold text-secondary">
          <span>
            <i className="fa-solid fa-plus" />
          </span>{" "}
          View
        </span>
      </div>
      <div className="d-flex flex-wrap align-items-center">
        <span className="fw-semibold text-secondary me-2">
          <span>
            <i className="fa-solid fa-magnifying-glass" />
          </span>{" "}
          Search
        </span>
        <button type="button" className="btn btn-primary ms-2 mb-2 mb-sm-0">
          {" "}
          <i className="fa-solid fa-bars-progress" /> Hide . 1
        </button>
        <span className="ms-2 fw-semibold text-secondary">
          <span>
            <i className="fa-solid fa-gear" />
          </span>{" "}
          Customize
        </span>
        <div className="dropdown ms-3 d-flex">
           <Link to={all_routes.addtask} >
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Add Task
          </button>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
        <span className="mx-2 bg-secondary rounded-circle p-2 text-white">
          <i className="fa-solid fa-chevron-down" />
        </span>
      </div>
    </div>
  </div>
  <div className="row ms-2 mt-3">
  {/* Left Column */}
  <div className="col-12 col-lg-5 mb-3 mb-lg-0 d-flex flex-wrap align-items-center justify-content-lg-start justify-content-center">
    <span className="me-2 mb-2">
      <button
        type="button"
        className="btn btn-outline-secondary px-4 py-1 fw-semibold"
        style={{ borderRadius: 50 }}
      >
        <span>
          <i className="fa-brands fa-hive" />
        </span>{" "}
        Group: Status
      </button>
    </span>
    <span className="me-2 mb-2">
      <button
        type="button"
        className="btn btn-outline-secondary px-4 py-1 fw-semibold"
        style={{ borderRadius: 50 }}
      >
        Subtasks: Collapse all
      </button>
    </span>
  </div>
  {/* Right Column */}
  <div className="col-12 col-lg-7 d-flex flex-wrap align-items-center justify-content-lg-end justify-content-center">
    <span className="me-2 mb-2">
      <button
        type="button"
        className="btn btn-outline-secondary px-4 py-1 fw-semibold"
        style={{ borderRadius: 50 }}
      >
        <span>
          <i className="fa-solid fa-arrow-up-wide-short" />
        </span>{" "}
        Filter
      </button>
    </span>
    <span className="me-2 mb-2">
      <button
        type="button"
        className="btn btn-outline-secondary px-4 py-1 fw-semibold"
        style={{ borderRadius: 50 }}
      >
        <span>
          <i className="fa-solid fa-sort" />
        </span>{" "}
        Sort
      </button>
    </span>
    <span className="me-2 mb-2">
      <button
        type="button"
        className="btn btn-outline-secondary px-4 py-1 fw-semibold"
        style={{ borderRadius: 50 }}
      >
        <span>
          <i className="fa-solid fa-user-group" />
        </span>{" "}
        Assignee
      </button>
    </span>
    <span className="me-2 mb-2">
      <button
        type="button"
        className="btn btn-outline-secondary px-4 py-1 fw-semibold"
        style={{ borderRadius: 50 }}
      >
        <span>
          <i className="fa-regular fa-circle-check" />
        </span>{" "}
        Closed
      </button>
    </span>
    <span className="mb-2">
      <input
        type="search"
        placeholder="Search..."
        className="form-control"
        style={{ maxWidth: 200, borderRadius: 5 }}
      />
    </span>
  </div>
  </div>

<div className="row ms-2 mt-4">
  <div className="col-12 d-flex flex-wrap justify-content-center justify-content-md-start">
    
    <div className="col-12 col-md-6 col-lg-2">
      <div className="me-3 mb-3 text-center">
        <span
          className="fw-semibold  d-block py-2"
          style={{ backgroundColor: "#f0f0f2" }}
        >
          Incoming
        </span>
        <Link to={all_routes.addtask} >
        <p className="fw-semibold text-secondary mt-2">
          <span>
            <i className="fa-solid fa-plus" />
          </span>{" "}
          Add Task
        </p>
        </Link>
      </div>
    </div>
    
    <div className="col-12 col-md-6 col-lg-2">
      <div className="me-3 mb-3 text-center">
        <span
          className="fw-semibold  d-block py-2"
          style={{ backgroundColor: "#f0f0f2" }}
        >
          Interview Booked
        </span>
        <Link to={all_routes.individualcandidatepage} >
                <HiringTaskCard />
        </Link>
        <Link to={all_routes.addtask} >
        <p className="fw-semibold text-secondary mt-2">
          <span>
            <i className="fa-solid fa-plus" />
          </span>{" "}
          Add Task
        </p>
        </Link>
      </div>
    </div>
    {/* Interviewed */}
    <div className="col-12 col-md-6 col-lg-2">
      <div className="me-3 mb-3 text-center">
        <span
          className="fw-semibold  d-block py-2"
          style={{ backgroundColor: "#f0f0f2" }}
        >
          Interviewed
        </span>
        <Link to={all_routes.addtask} >
        <p className="fw-semibold text-secondary mt-2">
          <span>
            <i className="fa-solid fa-plus" />
          </span>{" "}
          Add Task
        </p>
        </Link>
      </div>
    </div>
    {/* Shortlisted Offer Sent */}
    <div className="col-12 col-md-6 col-lg-2">
      <div className="me-3 mb-3 text-center">
        <span
          className="fw-semibold  d-block py-2"
          style={{ backgroundColor: "#f0f0f2" }}
        >
          Shortlisted Offer Sent
        </span>
        <Link to={all_routes.addtask} >
        <p className="fw-semibold text-secondary mt-2">
          <span>
            <i className="fa-solid fa-plus" />
          </span>{" "}
          Add Task
        </p>
        </Link>
      </div>
    </div>
    {/* Hired */}
    <div className="col-12 col-md-6 col-lg-2">
      <div className="me-3 mb-3 text-center">
        <div className="dropdown">
          <button
            className="btn btn-light fw-semibold dropdown-toggle w-100 py-2"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hired
          </button>
          <HiringTaskCard />
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                315317-Triton Partners <br /> -EU &amp; NYC - RFP for... <br />
                <span className="fs-6 text-secondary">
                  In{" "}
                  <span>
                    <i className="fa-solid fa-briefcase" />
                  </span>{" "}
                  All Project
                </span>
              </a>
            </li>
          </ul>
        </div>
        <Link to={all_routes.addtask} >
        <p className="fw-semibold text-secondary mt-2">
          <span>
            <i className="fa-solid fa-plus" />
          </span>{" "}
          Add Task
        </p>
        </Link>
      </div>
    </div>
    {/* Unsuccessful */}
    <div className="col-12 col-md-6 col-lg-2">
      <div className="mb-3 text-center">
        <span
          className="fw-semibold  d-block py-2"
          style={{ backgroundColor: "#f0f0f2" }}
        >
          Unsuccessful
        </span>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Recruitment;