import { Box } from "@mui/material"
import {Typography} from "@mui/material"
import SearchComponent from "../Shared/SearchComponent/SearchComponent"
import AddComponent from "../Shared/AddComponent/AddComponent"
import DataTable from "../Shared/DataTable/DataTable"
import { useEffect, useState } from "react"
import { getAllActivities } from "../../services/api/activities"
import type { DataProps } from "../../interfaces/data"

export default function Activities() {

  const [data,setData] = useState<DataProps[]>([]);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    const resultData = await getAllActivities();
    setData(resultData)
  }

  return (
    <Box sx={{backgroundColor : "#F2F2F2" , height : { xs : "auto" } , width : { xs : "97%" , md : "99%" }}} padding={"15px"} borderRadius={"10px"} display={"flex"} flexDirection={"column"} gap={"20px"}>
    <Typography component={"h3"} fontSize={"18px"}>فعالیت ها</Typography>
    <SearchComponent list={data}/>
    <AddComponent refetch={refreshData} title="activities" componentTitle="فعالیت"/>
    <DataTable title="activities" refetch={refreshData} dataTable={data} page="جدول فعالیت ها"/>
  </Box>
  )
}
