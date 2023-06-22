import React, { useState, useRef } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import { useClickOutside } from "../../../hooks/useClickOutside";
import SectionCommonTable from "../../../components/SectionCommonTable";
import DashboardTable from "./table/dashboardTable";

const HomePage = () => {
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
  
  // update member
  const registryHandler = (body) => {
    setValues(body);
    setOpenModal(true);
  };

  const [filterData, setFilterData] = useState([]);
  // console.log(filterData);

  const data = [
    {
      projectId: "P001",
      projectName: "Solar Farm",
      quantity: 1000,
      methodology: "Renewable Energy Standard",
      location: "California, USA",
      vintage: 2023,
      projectType: "Renewable Energy",
      creditType: "Carbon Credits",
      registry: "XYZ Registry",
    },
    {
      projectId: "P002",
      projectName: "Waste Management",
      quantity: 500,
      methodology: "Landfill Gas Capture",
      location: "New York, USA",
      vintage: 2023,
      projectType: "Waste Management",
      creditType: "Carbon Credits",
      registry: "ABC Registry",
    },
    {
      projectId: "P003",
      projectName: "Wind Farm",
      quantity: 2000,
      methodology: "Wind Power Generation",
      location: "Texas, USA",
      vintage: 2023,
      projectType: "Renewable Energy",
      creditType: "Renewable Energy Certificates",
      registry: "LMN Registry",
    },
    {
      projectId: "P004",
      projectName: "Forest Conservation",
      quantity: 10000,
      methodology:
        "Reduced Emissions from Deforestation and Degradation (REDD+)",
      location: "Amazon Rainforest",
      vintage: 2023,
      projectType: "Land Use and Conservation",
      creditType: "Verified Carbon Units",
      registry: "PQR Registry",
    },
    {
      projectId: "P005",
      projectName: "Hydroelectric Power Plant",
      quantity: 1500,
      methodology: "Hydropower Generation",
      location: "Switzerland",
      vintage: 2023,
      projectType: "Renewable Energy",
      creditType: "Carbon Credits",
      registry: "XYZ Registry",
    },
  ];


  return (
    <div className="rf_homPage_wrapper" id="pddfff">
      <div className="rf_section_title for_download_handle">
        <h2>Dashboard</h2>
      </div>
      <SectionCommonTable
        wrapperClassName="allmember_table"
        cardStyle={{ backgroundColor: "#fff" }}
        sectionTableTitle={`All Serial Numbers ${data?.length}`}
        data={data}
        setFilterData={setFilterData}
        table={
          <DashboardTable
            data={filterData.length > 0 ? filterData : data}
          />
        }
      />
      <Button onClick={registryHandler} className="addSerialNumber-btn"> Add Serial Number</Button>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalTitle="Add Serial Number"
        modalRef={modalRef}
      >
        <div className="rf_commol_modal_field">
          <form >
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
              <Button className="btn" type="submit">
                Add New Serial Number
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default HomePage;
