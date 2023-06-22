import React, { useState, useRef } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { popupShow } from "../../../containers/AuthPages/Login";
import Modal from "../../../components/Modal";
import { useClickOutside } from "../../../hooks/useClickOutside";

const AddSerialNumber = () => {
  const [openModalForImage, setOpenModalForImage] = useState(popupShow);
  const modalImageRef = useRef(null);
  useClickOutside(modalImageRef, () => setOpenModalForImage(false));

  // modal toggle
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef(null);
  useClickOutside(modalRef, () => setOpenModal(false));

  // handle change
  const [values, setValues] = useState({});
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="rf_homPage_wrapper" id="pddfff">
      <div className="rf_section_title for_download_handle">
        <h2>Add Serail Number</h2>
      </div>
      <div
        className="rf_commol_modal_field"
        style={{
          padding: "20px",
          background: "var(--bg-white)",
          margin: "20px 0 50px 0",
          borderRadius: "10px",
        }}
      >
        <form>
          <div className="form_group">
            <Input
              label="Serial Number"
              type="text"
              name="serialNumber"
              value={values.user_id}
              onChange={handleChange}
              inputGroupClass="left"
            />
            <Input
              label="Project Id"
              type="text"
              name="projectId"
              value={values.name}
              onChange={handleChange}
              inputGroupClass="left"
            />
            <Input
              label="project Name"
              type="text"
              name="projectName"
              value={values.sponsor_id}
              onChange={handleChange}
              inputGroupClass="left"
            />
            <Input
              label="Quantity"
              type="text"
              name="Quantity"
              value={values.mobile}
              onChange={handleChange}
              inputGroupClass="left"
            />
            <Input
              label="Methodology"
              type="text"
              name="Methodology"
              value={values.email}
              onChange={handleChange}
              inputGroupClass="left"
            />
            <Input
              label="Location"
              type="text"
              name="location"
              value={values.wallet_address}
              onChange={handleChange}
              inputGroupClass="left"
            />
            <Input
              label="Vintage"
              type="text"
              name="vintage"
              value={values.trx_password}
              onChange={handleChange}
              inputGroupClass="left"
            />
            <Input
              label="Project Type"
              type="text"
              name="projectType"
              value={values.trx_password}
              onChange={handleChange}
              inputGroupClass="left"
            />
            <Input
              label="Credit Type"
              type="text"
              name="creditType"
              value={values.trx_password}
              onChange={handleChange}
              inputGroupClass="left"
            />
          </div>
          <div className="submit_button">
            <Button className="btn" style={{ width: "200px" }} type="submit">
              Add New Serial Number
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSerialNumber;
