import { Box, Grid, IconButton, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import type { DataGridRowsType, SetType } from "../types/DataGridTypes";

const columnHelper = createColumnHelper<SetType>();

const columns = [
  columnHelper.accessor("setName", {
    header: () => (
      <Typography variant="subtitle1" color={"primary.light"}>
        Set name
      </Typography>
    ),
    cell: (props) => (
      <Grid display={"flex"} alignItems={"center"} gap={2}>
        <Box
          sx={{
            width: 14,
            height: 8,
            backgroundColor: props.getValue()?.color,
          }}
        ></Box>
        <Box>
          <Typography>{props.getValue()?.title}</Typography>
          <Typography variant="body2" color={"primary.light"}>
            {props.getValue()?.subTitle}
          </Typography>
        </Box>
      </Grid>
    ),
  }),
  columnHelper.accessor("category", {
    header: () => (
      <Typography variant="subtitle1" color={"primary.light"}>
        Category
      </Typography>
    ),
    cell: (props) => <Typography>{props.getValue()}</Typography>,
  }),
  columnHelper.accessor("address", {
    header: () => (
      <Typography variant="subtitle1" color={"primary.light"}>
        Address
      </Typography>
    ),
    cell: (props) => <Typography>{props.getValue()}</Typography>,
  }),
  columnHelper.accessor("nextAvailability", {
    header: () => (
      <Typography variant="subtitle1" color={"primary.light"}>
        Next availability
      </Typography>
    ),
    cell: (props) => (
      <Grid
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography>{props.getValue()}</Typography>
        <IconButton>
          <ArrowForward />
        </IconButton>
      </Grid>
    ),
  }),
];

export const useDataGridData = (tableData: DataGridRowsType) => {
  const tableRefactoredData = useMemo(() => {
    return (
      tableData?.data?.map((item: SetType) => ({
        setName: item?.setName,
        category: item?.category,
        address: item?.address,
        nextAvailability: item?.nextAvailability,
      })) || []
    );
  }, [tableData]);

  const table = useReactTable({
    data: tableRefactoredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return table;
};
