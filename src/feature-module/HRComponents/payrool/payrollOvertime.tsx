import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import { estimate_details } from "../../../core/data/json/estimates-details";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import Table from "../../../core/common/dataTable/index";
import PredefinedDateRanges from "../../../core/common/datePicker";
import { payment_details } from "../../../core/data/json/payments_details";
import { expenses_details } from "../../../core/data/json/expenses_details";
import { DatePicker } from "antd";
import CommonSelect from "../../../core/common/commonSelect";
import { provident_funds } from "../../../core/data/json/provident_funds_details";
import { taxs_details } from "../../../core/data/json/taxs_details";
import { employee_salary_details } from "../../../core/data/json/employee_salary_details";
import { render } from "react-dom";
import { label } from "yet-another-react-lightbox/*";
import { payrollAdditional } from "../../../core/data/json/payroll_addition";
import { payrollOvertime } from "../../../core/data/json/payroll_overtime";
import CollapseHeader from "../../../core/common/collapse-header/collapse-header";

const PayRollOvertime = () => {
    const getModalContainer = () => {
        const modalElement = document.getElementById("modal-datepicker");
        return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
    };

    const data = payrollOvertime;
    const columns = [
        {
            title: "Name",
            dataIndex: "Name",
            render: (text: String, record: any) => (
                <h6 className="fs-14 fw-medium text-gray-9">{text}</h6>
            ),
            sorter: (a: any, b: any) =>
                a.Name.length - b.Name.length,
        },
        {
            title: "Rate",
            dataIndex: "Rate",

            sorter: (a: any, b: any) =>
                a.Rate.length - b.Rate.length,
        },
        {
            title: "",
            dataIndex: "action",
            render: (text: String, record: any) => (
                <div className="action-icon d-inline-flex">
                    <Link
                        to="#"
                        className="me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_overtime"
                    >
                        <i className="ti ti-edit" />
                    </Link>
                    <Link to="#" data-bs-toggle="modal" data-bs-target="#delete_modal">
                        <i className="ti ti-trash" />
                    </Link>
                </div>
            ),
            sorter: (a: any, b: any) => a.action.length - b.action.length,
        },
    ];
    const ratetype = [
        { value: "Select", label: "Select" },
        { value: "Hourly 1.5", label: "Hourly 1.5" },
        { value: "Hourly 3", label: "Hourly 3" },
        { value: "Hourly 2", label: "Hourly 2" },
    ];

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb ">
                        
                   
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">HR</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Payroll Items
                                    </li>
                                </ol>
                            </nav>
                    
                        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
                            <div className="mb-2">
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
                            </div>
                            <div className="head-icons ms-2">
                                <CollapseHeader />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between my-4">
                        <div className="payroll-btns">
                            <Link to={all_routes.payrollAddition} className="btn btn-white  border me-2">
                                Additions
                            </Link>
                            <Link
                                to={all_routes.payrollOvertime}
                                className="btn btn-white active border me-2"
                            >
                                Overtime
                            </Link>
                            <Link to={all_routes.payrollDeduction} className="btn btn-white border">
                                Deductions
                            </Link>
                        </div>
                        <div className="mb-2">
                            <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#add_overtime"
                                className="btn btn-primary d-flex align-items-center"
                            >
                                <i className="ti ti-circle-plus me-2" />
                                Add Overtime
                            </Link>
                        </div>
                    </div>
                    {/* /Breadcrumb */}
                    {/* Policy list */}
                    <div className="card">
                        <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                            <h5>Additions List</h5>
                            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                                <div className="dropdown">
                                    <Link
                                        to="#"
                                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                        data-bs-toggle="dropdown"
                                    >
                                        Sort By : Last 7 Days
                                    </Link>
                                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Recently Added
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Ascending
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item rounded-1"
                                            >
                                                Desending
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <Table dataSource={data} columns={columns} Selection={true} />
                        </div>
                    </div>
                    {/* /Policylist list */}
                </div>
                
            </div>
            {/* /Page Wrapper */}
            {/* Add Payroll Overtime */}
            <div className="modal fade" id="add_overtime">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Overtime</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form action="payroll-overtime.html">
                            <div className="modal-body pb-0">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Rate Type</label>
                                            <CommonSelect
                                                className='select'
                                                options={ratetype}
                                                defaultValue={ratetype[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Rate</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-white border me-2"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                    Add Overtime
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Payroll */}
            {/* Edit  Payroll Overtime */}
            <div className="modal fade" id="edit_overtime">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Overtime</h4>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form action="payroll-overtime.html">
                            <div className="modal-body pb-0">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="Normal day OT 1.5x"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Rate Type</label>
                                            <CommonSelect
                                                className='select'
                                                options={ratetype}
                                                defaultValue={ratetype[1]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Rate</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-white border me-2"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Edit  Payroll Overtime */}
        </>



    );
};

export default PayRollOvertime;
