import { Box, Typography } from "@mui/material";
import SearchComponent from "../Shared/SearchComponent/SearchComponent";
import AddComponent from "../Shared/AddComponent/AddComponent";
import DataTable from "../Shared/DataTable/DataTable";
import { useEffect, useState } from "react";
import { getAllPlans } from "../../services/api/plans";
import type { DataProps } from "../../interfaces/data";

export default function Plans() {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    const resultData = await getAllPlans();
    setData(resultData)
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F2F2F2",
        height: { xs: "auto" },
        width: { xs: "97%", md: "80%" },
      }}
      padding={"15px"}
      borderRadius={"10px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
    >
      <Typography component={"h3"} fontSize={"18px"}>
        برنامه ها
      </Typography>
      <SearchComponent list={data} />
      <AddComponent title={"plans"} refetch={refreshData} componentTitle="برنامه" />
      <DataTable
        title="plans"
        refetch={refreshData}
        dataTable={data}
        page="جدول برنامه ها"
      />
    </Box>
  );
}
