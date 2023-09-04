import Head from "next/head";
import { Box, Grid, Typography } from "@mui/material";
import DropDown from "@/components/DropDown";
import { useTableFilterData } from "./hooks/useTableFilterData";
import { useState } from "react";
import { DataGrid } from "./containers/DataGrid";
import { Toolbar } from "./components/Toolbar";

export default function Home() {
  const [filterType, setFilterType] = useState<number | undefined>(undefined);
  const { filterItemsData, tableData } = useTableFilterData(filterType);

  return (
    <>
      <Head>
        <title>Setflow</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>

      <Box p={5}>
        <Typography variant="h1" mb={4}>
          Sets
        </Typography>

        <Grid
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={3}
        >
          <Toolbar />
        </Grid>

        <Grid
          p={3}
          borderTop={1}
          borderBottom={1}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={3}
        >
          <Grid display={"flex"} alignItems={"center"}>
            <DropDown
              listItems={filterItemsData?.categoryItems}
              listLabel={"Category"}
              onChange={(value) => setFilterType(value)}
            />
            <DropDown
              listItems={filterItemsData?.clientBrandItems}
              listLabel={"Client/brand"}
              onChange={(value) => setFilterType(value)}
            />
          </Grid>

          <DropDown
            sortType
            listItems={filterItemsData?.sortByItems}
            listLabel={"Sort by"}
            onChange={(value) => setFilterType(value)}
          />
        </Grid>

        <DataGrid tableData={tableData} />
      </Box>
    </>
  );
}
