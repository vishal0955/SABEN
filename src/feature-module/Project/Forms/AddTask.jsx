

import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const TaskForm = () => {
  return (
    <div className="container mt-4">
      <h4 className="text-primary"></h4>
      <div className="card p-4 shadow">
        <h5 className="text-secondary">Job Information</h5>
        <form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Job ID</label>
              <input type="text" className="form-control" placeholder="Enter Job ID" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Job Name</label>
              <input type="text" className="form-control" placeholder="Enter Job Name" />
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Project ID</label>
              <input type="text" className="form-control" placeholder="Enter Project ID" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Project Name</label>
              <input type="text" className="form-control" placeholder="Enter Project Name" />
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Client</label>
              <input type="text" className="form-control" placeholder="Enter Client Name" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Promotion</label>
              <input type="text" className="form-control" placeholder="Enter Promotion" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Brand</label>
              <input type="text" className="form-control" placeholder="Enter Brand" />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Sub-Brand</label>
              <input type="text" className="form-control" placeholder="Enter Sub-Brand" />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Flavour</label>
              <input type="text" className="form-control" placeholder="Enter Flavour" />
            </div>
          </div>

          <h5 className="text-secondary">Date Information</h5>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Date Created</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Target Date</label>
              <input type="date" className="form-control" />
            </div>
          </div>

          <h5 className="text-secondary">Product Details</h5>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Pack Code</label>
              <input type="text" className="form-control" placeholder="Enter Pack Code" />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">FG Code</label>
              <input type="text" className="form-control" placeholder="Enter FG Code" />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Barcode</label>
              <input type="text" className="form-control" placeholder="Enter Barcode" />
            </div>
          </div>

          <h5 className="text-secondary">Instructions</h5>
          <div className="mb-3">
            <label className="form-label">Instructions</label>
            <textarea className="form-control" rows="3" placeholder="Enter Instructions"></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Attachments</label>
            <input type="file" className="form-control" multiple />
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">Save & Close</button>
   
            <button type="button" className="btn btn-danger">Discard</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;

