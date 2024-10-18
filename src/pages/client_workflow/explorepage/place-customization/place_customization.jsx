import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div class="container mt-5 p-4 rounded custom-container">
        <h2 class="text-success">Order With Customization</h2>
        <button class="btn btn-success my-3">Project Scope/Requirements</button>

        <div class="form-check form-switch mb-3">
          <input class="form-check-input" type="checkbox" id="customSwitch1" />
          <label class="form-check-label fw-bold" for="customSwitch1">
            Premium
          </label>
        </div>

        <div class="row mb-4">
          <div class="col-lg-4">
            <ul class="list-unstyled">
              <li>Multi-Category Listing</li>
              <li>Social Media Integration</li>
              <li>Multi-Category Listing</li>
              <li>Social Media Integration</li>
            </ul>
          </div>
          <div class="col-lg-4">
            <ul class="list-unstyled">
              <li>Multi-Category Listing</li>
              <li>Social Media Integration</li>
              <li>Multi-Category Listing</li>
              <li>Social Media Integration</li>
            </ul>
          </div>
          <div class="col-lg-4">
            <ul class="list-unstyled">
              <li>Multi-Category Listing</li>
              <li>Social Media Integration</li>
              <li>Multi-Category Listing</li>
              <li>Social Media Integration</li>
            </ul>
          </div>
        </div>

        <div class="mb-4 p-3 rounded bg-light custom-requirements">
          <div class="mb-3">
            <label for="requirements" class="form-label">
              Please Enter Other Customizations/Requirements
            </label>
            <input
              type="text"
              class="form-control"
              id="requirements"
              placeholder="Text"
              maxlength="100"
            />
            <small class="text-muted">0 / 100</small>
          </div>

          <div class="mb-3">
            <label for="fileUpload" class="form-label">
              Attach Files
            </label>
            <input class="form-control" type="file" id="fileUpload" />
          </div>

          <div class="upload-area text-center border rounded p-4">
            <p>Click or drag file to this area to upload</p>
            <p class="text-muted">Support for a single or bulk upload.</p>
            <i class="bi bi-cloud-upload fs-1"></i>
          </div>
        </div>
      </div>
    </Modal>
  );
}

function Place_customization() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <button className="btn btn-success" onClick={() => setModalShow(true)}>
        Place with customize
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Place_customization;
