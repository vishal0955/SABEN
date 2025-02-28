import React from 'react'
import CommonTabs from '../common-components'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import { all_routes } from '../../router/all_routes'
import CollapseHeader from '../../../core/common/collapse-header/collapse-header'
import CrmsModal from '../../../core/modals/crms_modal'

const DealsDetails = () => {
  const routes = all_routes
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content">
      <div className="row align-items-center row-gap-3 mb-4">
        <div className="col-sm-6">
          <div className="d-flex align-items-center flex-wrap row-gap-3">
            <h6 className="fw-medium d-inline-flex align-items-center me-2">
              <Link to={routes.dealsList}>
                <i className="ti ti-arrow-left me-2" />
                Deals
              </Link>
              <span className="text-gray d-inline-flex ms-2">
                / Website Redesign
              </span>
            </h6>
            <div className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-git-branch me-1" />
                Marketing Pipeline
              </Link>
              <ul className="dropdown-menu  dropdown-menu-end p-3">
                <li>
                  <Link
                    to="#"
                    className="dropdown-item rounded-1"
                  >
                    Marketing Pipeline
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="dropdown-item rounded-1"
                  >
                    Deal Pipeline
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="d-flex justify-content-sm-end">
            <div className="head-icons ms-2">
            <CollapseHeader/>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 theiaStickySidebar">
          <div className="card card-bg-1 sticky-class">
            <div className="card-body p-0">
              <span className="avatar avatar-xl border text-dark bg-white rounded-circle m-auto d-flex mb-2">
                WR
              </span>
              <div className="text-center px-3 pb-3 border-bottom">
                <h5 className="d-flex align-items-center justify-content-center mb-1">
                  Website Redesign
                  <span className="avatar avatar-sm avatar-rounded bg-light ms-2">
                    <i className="ti ti-star-filled text-warning fs-14" />
                  </span>
                </h5>
                <p className="text-dark mb-1">
                  1861 Bayonne Ave, Manchester, NJ, 08759
                </p>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="badge badge-dark-transparent me-2">
                    <i className="ti ti-lock me-1" />
                    Private
                  </span>
                  <span className="badge badge-success-transparent">
                    <i className="ti ti-thumb-up me-1" />
                    Won
                  </span>
                </div>
              </div>
              <div className="p-3 border-bottom">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h6>Deals information</h6>
                  <Link
                    to="#"
                    className="btn btn-icon btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_company"
                  >
                    <i className="ti ti-edit" />
                  </Link>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="d-inline-flex align-items-center">
                    <i className="ti ti-gender-male me-2" />
                    Date Created
                  </span>
                  <p className="text-dark">10 Jan 2024, 11:45 pm</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="d-inline-flex align-items-center">
                    <i className="ti ti-phone me-2" />
                    Probability - Win
                  </span>
                  <p className="text-dark">85%</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="d-inline-flex align-items-center">
                    <i className="ti ti-phone me-2" />
                    Deal Value
                  </span>
                  <p className="text-dark">$4,50,000 </p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="d-inline-flex align-items-center">
                    <i className="ti ti-gender-male me-2" />
                    Due Date
                  </span>
                  <p className="text-dark">25 Jan 2024, 11:45 pm</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="d-inline-flex align-items-center">
                    <i className="ti ti-phone me-2" />
                    Follow Up
                  </span>
                  <p className="text-dark">25 Jan 2024</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="d-inline-flex align-items-center">
                    <i className="ti ti-phone me-2" />
                    Source
                  </span>
                  <p className="text-dark">Google</p>
                </div>
              </div>
              <div className="p-3 border-bottom">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h6>Deal Owner</h6>
                  <Link to="#" className="btn btn-icon btn-sm">
                    <i className="ti ti-edit" />
                  </Link>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span className="avatar avatar-md avatar-rounded me-2">
                    <ImageWithBasePath src="assets/img/profiles/avatar-01.jpg" alt="Img" />
                  </span>
                  <h6>Sharon Roy</h6>
                </div>
                <div className="d-flex align-items-center">
                  <span className="avatar avatar-md avatar-rounded me-2">
                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="Img" />
                  </span>
                  <h6>Vaughan Lewis</h6>
                </div>
              </div>
              <div className="p-3 border-bottom">
                <h5 className="mb-3">Tags</h5>
                <div className="d-flex align-items-center">
                  <span className="badge badge-soft-success me-3">Collab</span>
                  <span className="badge badge-soft-warning">Rated</span>
                </div>
              </div>
              <div className="p-3 border-bottom">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h5>Company</h5>
                  <Link
                    to="#"
                    className="text-primary d-inline-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#add_company"
                  >
                    <i className="ti ti-circle-plus me-1" />
                    Add New
                  </Link>
                </div>
                <div className="d-flex align-items-center file-name-icon mb-3">
                  <Link
                    to="#"
                    className="avatar avatar-md border rounded-circle"
                  >
                    <ImageWithBasePath
                      src="assets/img/company/company-01.svg"
                      className="img-fluid"
                      alt="img"
                    />
                  </Link>
                  <div className="ms-2">
                    <h6 className="fw-medium">BrightWave Innovations</h6>
                    <span className="d-block">bwi.example.com</span>
                  </div>
                </div>
                <div className="d-flex align-items-center file-name-icon">
                  <Link
                    to="#"
                    className="avatar avatar-md border rounded-circle"
                  >
                    <ImageWithBasePath
                      src="assets/img/company/company-02.svg"
                      className="img-fluid"
                      alt="img"
                    />
                  </Link>
                  <div className="ms-2">
                    <h6 className="fw-medium">Stellar Dynamics</h6>
                    <span className="d-block">sd.example.com</span>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h6>Other information</h6>
                  <Link to="#" className="btn btn-icon btn-sm">
                    <i className="ti ti-edit" />
                  </Link>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="d-inline-flex align-items-center">
                    <i className="ti ti-calendar-check me-2" />
                    Last Modified
                  </span>
                  <p className="text-dark">10 Jan 2024, 11:45 pm</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="d-inline-flex align-items-center">
                    <i className="ti ti-user-check me-2" />
                    Modified By
                  </span>
                  <p className="text-dark d-flex align-items-center">
                    <span className="avatar avatar-sm avatar-rounded me-2">
                      <ImageWithBasePath src="assets/img/profiles/avatar-19.jpg" alt="Img" />
                    </span>
                    Darlee Roberston
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommonTabs/>
      </div>
    </div>
    <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p className="mb-0">2014 - 2025 © BPAV</p>
      <p>
        Designed &amp; Developed By{" "}
        <Link to="#" className="text-primary">
          Dreams
        </Link>
      </p>
    </div>
  </div>
  {/* /Page Wrapper */}
  <CrmsModal/>
</>

  )
}

export default DealsDetails