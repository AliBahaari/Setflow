import axios from "axios";
import { useQuery } from "react-query";

type useTableFilterDataType = number | undefined;

export const useTableFilterData = (filterType: useTableFilterDataType) => {
  const { data: filterItemsData } = useQuery(["filterItems"], () =>
    axios
      .get("http://localhost:3000/api/filterItems")
      .then((response) => response.data)
  );
  const { data: tableData } = useQuery(["tableRecords", filterType], () =>
    axios
      .get(`http://localhost:3000/api/tableRows`, {
        params: {
          type: filterType,
        },
      })
      .then((response) => response.data)
  );

  return {
    filterItemsData,
    tableData,
  };
};
