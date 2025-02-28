import React, { useState } from 'react'
import { all_routes } from '../router/all_routes'
import { Link } from 'react-router-dom';
import DepartmentTable from './DepartmentList';
import Table from '../../core/common/dataTable/index';
import { departments } from '../../core/data/json/departments';
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import PredefinedDateRanges from '../../core/common/datePicker';
// import { employee_list_details } from '../../core/data/json/employees_list_details';
import { DatePicker } from 'antd';
import CommonSelect from '../../core/common/commonSelect';
import CollapseHeader from '../../core/common/collapse-header/collapse-header';
type PasswordField = "password" | "confirmPassword";

const DepartmentList = () => {

  const data = departments;
  const columns = [
    {
      title: 'Department Id',
      dataIndex: 'id',
    },
    {
      title: "Department Name",
      dataIndex: "department",
    },
  
  ]
  // const columns = [
  //   {
  //     title: "Emp ID",
  //     dataIndex: "EmpId",
  //     render: (text: String, record: any) => (
  //       <Link to={all_routes.employeedetails}>{text}</Link>
  //     ),
  //     sorter: (a: any, b: any) => a.EmpId.length - b.EmpId.length,
  //   },
  //   {
  //     title: "Name",
  //     dataIndex: "Name",
  //     render: (text: string, record: any) => (
  //       <div className="d-flex align-items-center">
  //         <Link
  //           to={all_routes.employeedetails}
  //           className="avatar avatar-md"
  //           data-bs-toggle="modal" data-inert={true}
  //           data-bs-target="#view_details"
  //         >
  //           <ImageWithBasePath
  //             src={`assets/img/users/${record.Image}`}
  //             className="img-fluid rounded-circle"
  //             alt="img"
  //           />
  //         </Link>
  //         <div className="ms-2">
  //           <p className="text-dark mb-0">
  //             <Link
  //               to={all_routes.employeedetails}
  //               data-bs-toggle="modal" data-inert={true}
  //               data-bs-target="#view_details"
  //             >
  //               {record.Name}
  //             </Link>
  //           </p>
  //           <span className="fs-12">{record.CurrentRole}</span>
  //         </div>
  //       </div>
  //     ),
  //     sorter: (a: any, b: any) => a.Name.length - b.Name.length,
  //   },
  //   {
  //     title: "Email",
  //     dataIndex: "Email",
  //     sorter: (a: any, b: any) => a.Email.length - b.Email.length,
  //   },
  //   {
  //     title: "Phone",
  //     dataIndex: "Phone",
  //     sorter: (a: any, b: any) => a.Phone.length - b.Phone.length,
  //   },
  //   {
  //     title: "Designation",
  //     dataIndex: "Designation",
  //     render: (text: string, record: any) => (
  //       <div className="dropdown me-3">
  //         <Link
  //           to="#"
  //           className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
  //           data-bs-toggle="dropdown"
  //         >
  //           {record.Designation}
  //         </Link>
  //         <ul className="dropdown-menu  dropdown-menu-end p-3">
  //           <li>
  //             <Link to="#" className="dropdown-item rounded-1">
  //               Developer
  //             </Link>
  //           </li>
  //           <li>
  //             <Link to="#" className="dropdown-item rounded-1">
  //               Executive
  //             </Link>
  //           </li>
  //         </ul>
  //       </div>
  //     ),
  //     sorter: (a: any, b: any) => a.Designation.length - b.Designation.length,
  //   },
  //   {
  //     title: "Joining Date",
  //     dataIndex: "JoiningDate",
  //     sorter: (a: any, b: any) => a.JoiningDate.length - b.JoiningDate.length,
  //   },
  //   {
  //     title: "Status",
  //     dataIndex: "Status",
  //     render: (text: string, record: any) => (
  //       <span className={`badge ${text === 'Active' ? 'badge-success' : 'badge-danger'} d-inline-flex align-items-center badge-xs`}>
  //         <i className="ti ti-point-filled me-1" />
  //         {text}
  //       </span>

  //     ),
  //     sorter: (a: any, b: any) => a.Status.length - b.Status.length,
  //   },
  //   {
  //     title: "",
  //     dataIndex: "actions",
  //     render: () => (
  //       <div className="action-icon d-inline-flex">
  //         <Link
  //           to="#"
  //           className="me-2"
  //           data-bs-toggle="modal" data-inert={true}
  //           data-bs-target="#edit_employee"
  //         >
  //           <i className="ti ti-edit" />
  //         </Link>
  //         <Link to="#" data-bs-toggle="modal" data-inert={true} data-bs-target="#delete_modal">
  //           <i className="ti ti-trash" />
  //         </Link>
  //       </div>
  //     ),
  //   },
  // ]

  const department = [
    { value: "Select", label: "Select" },
    { value: "All Department", label: "All Department" },
    { value: "Finance", label: "Finance" },
    { value: "Developer", label: "Developer" },
    { value: "Executive", label: "Executive" },
  ];
  const designation = [
    { value: "Select", label: "Select" },
    { value: "Finance", label: "Finance" },
    { value: "Developer", label: "Developer" },
    { value: "Executive", label: "Executive" },
  ];

  const getModalContainer = () => {
    const modalElement = document.getElementById('modal-datepicker');
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.homedashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Department</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Department List
                  </li>
                </ol>
              </nav>
    
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="me-2 mb-2">
                <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
                  <Link
                    to={all_routes.departmentlist}
                    className="btn btn-icon btn-sm active bg-primary text-white me-1"
                  >
                    <i className="ti ti-list-tree" />
                  </Link>
                
                </div>
              </div>
              <div className="me-2 mb-2">
                {/* <div className="dropdown">
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
                </div> */}
              </div>
              <div className="mb-2">
                <Link
                  to="#"
                  data-bs-toggle="modal" data-inert={true}
                  data-bs-target="#add_employee"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-circle-plus me-2" />
                  Add Department
                </Link>
              </div>
              <div className="head-icons ms-2">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          <div className="row">
            {/* Total Plans */}
            {/* <div className="col-lg-3 col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center overflow-hidden">
                    <div>
                      <span className="avatar avatar-lg bg-dark rounded-circle">
                        <i className="ti ti-users" />
                      </span>
                    </div>
                    <div className="ms-2 overflow-hidden">
                      <p className="fs-12 fw-medium mb-1 text-truncate">
                        Total Employee
                      </p>
                      <h4>1007</h4>
                    </div>
                  </div>
                  <div>
                    <span className="badge badge-soft-purple badge-sm fw-normal">
                      <i className="ti ti-arrow-wave-right-down" />
                      +19.01%
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
            {/* /Total Plans */}
            {/* Total Plans */}
            {/* <div className="col-lg-3 col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center overflow-hidden">
                    <div>
                      <span className="avatar avatar-lg bg-success rounded-circle">
                        <i className="ti ti-user-share" />
                      </span>
                    </div>
                    <div className="ms-2 overflow-hidden">
                      <p className="fs-12 fw-medium mb-1 text-truncate">Active</p>
                      <h4>1007</h4>
                    </div>
                  </div>
                  <div>
                    <span className="badge badge-soft-primary badge-sm fw-normal">
                      <i className="ti ti-arrow-wave-right-down" />
                      +19.01%
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
            {/* /Total Plans */}
            {/* Inactive Plans */}
            {/* <div className="col-lg-3 col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center overflow-hidden">
                    <div>
                      <span className="avatar avatar-lg bg-danger rounded-circle">
                        <i className="ti ti-user-pause" />
                      </span>
                    </div>
                    <div className="ms-2 overflow-hidden">
                      <p className="fs-12 fw-medium mb-1 text-truncate">InActive</p>
                      <h4>1007</h4>
                    </div>
                  </div>
                  <div>
                    <span className="badge badge-soft-dark badge-sm fw-normal">
                      <i className="ti ti-arrow-wave-right-down" />
                      +19.01%
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
            {/* /Inactive Companies */}
            {/* No of Plans  */}
           
            {/* /No of Plans */}
          </div>
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <h5>Department List</h5>
              <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
               
              </div>
            </div>
            <div className="card-body p-0">
              <Table dataSource={data} columns={columns} Selection={true} />
              {/* <DepartmentTable /> */}
            </div>
          </div>
        </div>
      
      </div>
      {/* /Page Wrapper */}
      {/* Add Employee */}
      <div className="modal fade" id="add_employee">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div className="d-flex align-items-center">
                <h4 className="modal-title me-2">Add New Department</h4>
                {/* <span>Employee ID : EMP -0024</span> */}
              </div>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form action={all_routes.departmentlist}>
              <div className="contact-grids-tab">
                <ul className="nav nav-underline" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="info-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#basic-info"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Basic Information
                    </button>
                  </li>
                  
                </ul>
              </div>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="basic-info"
                  role="tabpanel"
                  aria-labelledby="info-tab"
                  tabIndex={0}
                >
                  <div className="modal-body pb-0 ">
                    <div className="row">
                  
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                           Department Id<span className="text-danger"> *</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Department  Name</label>
                          <input type="email" className="form-control" />
                        </div>
                      </div>
                 
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-light border me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                      Save{" "}
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="address"
                  role="tabpanel"
                  aria-labelledby="address-tab"
                  tabIndex={0}
                >
                
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-light border me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal" data-inert={true}
                      data-bs-target="#success_modal"
                    >
                      Save{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Employee */}
      {/* Edit Employee */}
      <div className="modal fade" id="add_employee">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div className="d-flex align-items-center">
                <h4 className="modal-title me-2">Add New Department</h4>
                {/* <span>Employee ID : EMP -0024</span> */}
              </div>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form action={all_routes.employeeList}>
              <div className="contact-grids-tab">
                <ul className="nav nav-underline" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="info-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#basic-info"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Basic Information
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="address-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#address"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Permissions
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="basic-info"
                  role="tabpanel"
                  aria-labelledby="info-tab"
                  tabIndex={0}
                >
                  <div className="modal-body pb-0 ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                          <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                            <i className="ti ti-photo text-gray-2 fs-16" />
                          </div>
                      
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                           Department Id<span className="text-danger"> *</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Department  Name</label>
                          <input type="email" className="form-control" />
                        </div>
                      </div>
                 
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-light border me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                      Save{" "}
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="address"
                  role="tabpanel"
                  aria-labelledby="address-tab"
                  tabIndex={0}
                >
                
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-light border me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal" data-inert={true}
                      data-bs-target="#success_modal"
                    >
                      Save{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Employee */}
      {/* Add Employee Success */}
      <div className="modal fade" id="success_modal" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body">
              <div className="text-center p-3">
                <span className="avatar avatar-lg avatar-rounded bg-success mb-3">
                  <i className="ti ti-check fs-24" />
                </span>
                <h5 className="mb-2">Department Added Successfully</h5>
              
                <div>
                  <div className="row g-2">
                    <div className="col-6">
                      <Link to={all_routes.employeeList} className="btn btn-dark w-100">
                        Back to List
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link
                        to={all_routes.employeedetails}
                        className="btn btn-primary w-100"
                      >
                        Detail Page
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Client Success */}
    </>

  )
}

export default DepartmentList;
