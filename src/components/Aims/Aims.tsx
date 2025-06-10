import { Box, Typography } from "@mui/material";
import SearchComponent from "../Shared/SearchComponent/SearchComponent";
import AddComponent from "../Shared/AddComponent/AddComponent";
import DataTable from "../Shared/DataTable/DataTable";
import { useEffect, useState } from "react";
import { getAllAims } from "../../services/api/aims";
import type { DataProps } from "../../interfaces/data";

export default function Aims() {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
   refreshData();
  }, []);

  const refreshData = async () => {
    const resultData = await getAllAims();
    setData(resultData)
  }

  return (
    <Box
      sx={{
        backgroundColor: "#F2F2F2",
        paddingBottom: "20px",
        width: { xs: "97%", md: "99%" },
        height: { xs: "auto" },
      }}
      padding={"15px"}
      borderRadius={"10px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
    >
      <Typography component={"h3"} fontSize={"18px"}>
        اهداف
      </Typography>
      <SearchComponent list={data}/>
      <AddComponent title={"aims"} refetch={refreshData} componentTitle="هدف"/>
      <DataTable title={"aims"} refetch={refreshData} dataTable={data} page={"جدول هدف ها"} />
    </Box>
  );
}
