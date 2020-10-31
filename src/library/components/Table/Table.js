import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

import MaterialTable from "material-table";
import { TablePagination } from "@material-ui/core";

import { Div } from "./TableStyles";
import { get } from "../../../library/networking/http";
import { setDataTable } from "../../redux/actions";

const Table = () => {
  const dispatch = useDispatch();

  const { token, dataTable, dataTableLocal } = useSelector(
    (state) => state.reducer
  );

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  const getUserBookins = async () => {
    console.log("ENTRA");
    console.log(token);
    if (token) {
      let response = await get("/user/", token);
      dispatch(setDataTable(response));
      console.log(response);
      console.log(dataTable);
    }
  };

  useEffect(() => {
    console.log("Token en table", token);
    getUserBookins();
  }, [token]);

  return (
    <Div>
      <MaterialTable
        icons={tableIcons}
        icons={tableIcons}
        title=""
        columns={[
          {
            title: "BookingId",
            field: "bookingId",
            sorting: true,
            cellStyle: { textAlign: "center" },
          },
          {
            title: "Cliente",
            field: "locationId.tutenUser",
            sorting: false,
            render: (rowData) =>
              rowData.locationId.tutenUser.firstName +
              " " +
              rowData.locationId.tutenUser.lastName,

            customFilterAndSearch: (term, rowData) =>
              (
                rowData.locationId.tutenUser.firstName.toLowerCase() +
                " " +
                rowData.locationId.tutenUser.lastName.toLowerCase()
              ).includes(term.toLowerCase()),
            cellStyle: { textAlign: "center" },
          },
          {
            title: "Fecha de Creación",
            field: "bookingTime",
            sorting: true,
            cellStyle: { textAlign: "center" },
          },
          {
            title: "Dirección",
            field: "locationId.streetAddress",
            sorting: true,
            cellStyle: { textAlign: "center" },
          },
          {
            title: "Precio",
            field: "bookingPrice",
            sorting: true,
            cellStyle: { textAlign: "center" },
          },
        ]}
        data={dataTable}
        options={{
          filtering: true,
          actionsColumnIndex: -1,
          headerStyle: { textAlign: "center", fontSize: 15 },
          searchFieldAlignment: "right",
          searchFieldStyle: { fontSize: 15 },
          rowStyle: { fontSize: 15 },
        }}
        components={{
          Pagination: (props) => (
            <TablePagination
              {...props}
              labelRowsPerPage={
                <div style={{ fontSize: 15 }}>{props.labelRowsPerPage}</div>
              }
              labelDisplayedRows={(row) => (
                <div style={{ fontSize: 15 }}>
                  {props.labelDisplayedRows(row)}
                </div>
              )}
              SelectProps={{
                style: {
                  fontSize: 15,
                },
              }}
            />
          ),
        }}
      />
    </Div>
  );
};

export default Table;
