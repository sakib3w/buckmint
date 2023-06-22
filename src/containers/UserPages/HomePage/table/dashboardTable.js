import React from "react";
import DataTable from "../../../../components/DataTable";

const columns = [
  { id: "sn", label: "S.N", minWidth: 20 },
  { id: "projectId", label: "Project ID", minWidth: 40 },
  {
    id: "projectName",
    label: "Project Name",
    minWidth: 80,
  },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 50,
  },
  {
    id: "methodology",
    label: "Methodology",
    minWidth: 120,
  },
  {
    id: "location",
    label: "Location",
    minWidth: 80,
  },
  {
    id: "vintage",
    label: "vintage",
    minWidth: 40,
  },
  {
    id: "projectType",
    label: "Project Type",
    minWidth: 100,
  },
  {
    id: "creditType",
    label: "Credit Type",
    minWidth: 70,
  },
  {
    id: "registry",
    label: "Registry",
    minWidth: 70,
  },
];

const DashboardTable = ({ data }) => {
  function createData(
    sn,
    projectId,
    projectName,
    quantity,
    methodology,
    location,
    vintage,
    projectType,
    creditType,
    registry
  ) {
    return {
      sn,
      projectId,
      projectName,
      quantity,
      methodology,
      location,
      vintage,
      projectType,
      creditType,
      registry,
    };
  }

  const rows = data?.map((d, index) =>
    createData(
      index + 1,
      d?.projectId,
      d?.projectName,
      d?.quantity,
      d?.methodology,
      d?.location,
      d?.vintage,
      d?.projectType,
      d?.creditType,
      d?.registry
    )
  );

  return (
    <DataTable
      columns={columns}
      rows={rows}
      perPageShow={6}
      tableHeight={440}
      className="common_table"
    />
  );
};

export default DashboardTable;
