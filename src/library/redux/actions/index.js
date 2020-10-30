export const setToken = (token) => {
  return { type: "SET_TOKEN", token };
};

export const setDeleteToken = (token) => {
  return { type: "DELETE_TOKEN", token };
};

export const setDataTable = (dataTable) => {
  return { type: "SET_DATA_TABLE", dataTable };
};
