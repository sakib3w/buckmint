import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardLayout from "../CardLayout";
import Input from "../Input";

const SectionCommonTable = ({
  wrapperClassName,
  cardStyle,
  countContainer,
  table,
  data,
  setFilterData,

}) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (data) {
      const filterData = data?.filter((dt) => {
        if (search === "") {
          return dt;
        } else if (
          dt?.projectId?.toLowerCase() === search?.toLowerCase()
          // dt?.projectName?.toLowerCase() === search?.toLowerCase() ||
          // dt?.location?.toLowerCase()?.includes(search?.toLowerCase())
        ) {
          return dt;
        }
      });
      setFilterData(filterData);
    }
  }, [search]);

  return (
    <div className={`rf_sectiontable_wrapper ${wrapperClassName}`}>
      <CardLayout style={cardStyle} className="rf_sectiontable_card">
        <div className="rf_sectiontable_title">

          {countContainer && (
            <div className="rf_sectiontable_balance">
              <h2>{countContainer}</h2>
            </div>
          )}
          {/* {setSelectOption && selectOptions && ( */}
            {/* <Select
              className="select_field"
              value={""}
              name="status"
              onChange={setSelectOption}
              options={selectOptions}
              isRequired={true}
            /> */}
          {/* )} */}
          {/* {data && headers && (
            <CSVLink
              className="downloadCSV_button"
              data={data}
              headers={headers}
              filename={"tp.csv"}
            >
              <Button className="downloadCSV_button">Download CSV</Button>
            </CSVLink>
          )} */}

          {data && setFilterData && (
            <div className="searchbar_input">
              <Input
                type="text"
                name="search"
                className="spacial_search_input"
                placeholder="Search project id ..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className="rf_sectiontable_table">{table}</div>
      </CardLayout>
    </div>
  );
};

export default SectionCommonTable;
