import { Box, TableBody, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Alert } from "@mui/material"
import { Button } from "@mui/material";
import type { DataProps } from "../../../interfaces/data";
import { useState } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
interface SearchComponentProp {
  list: DataProps[];
}

export default function SearchComponent({ list }: SearchComponentProp) {
  const [searchedCode, setSearchedCode] = useState("");
  const [resultItem, setResultItem] = useState<DataProps[]>([]);

  const findResultData = () => {
    const findResult = list.find((item) => searchedCode === item.code);
    setResultItem(findResult ? [findResult] : []);
  };

  return (
    <Box
      component={"form"}
      margin={"0 auto"}
      padding={"10px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
      height={"auto"}
      sx={{ backgroundColor: "#FFFFFF"  , width : { xs : "92%" , md : "97%" }}}
    >
      <Typography component={"h2"} color="blue" fontSize={"18px"}>
        جست و جو
      </Typography>
      <TextField
        label="جستجو کنید ..."
        sx={{ width: { xs: "100%", md: "40%" } }}
        type="text"
        value={searchedCode}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchedCode(e.target.value)
        }
        placeholder="کد را وارد کنید"
        variant="outlined"
      />
      <Box display={"flex"} alignItems={"center"} justifyContent={"flex-end"}>
        <Button
          variant="contained"
          color="primary"
          onClick={findResultData}
          sx={{
            px: 4,
            py: 1,
            fontWeight: "bold",
            width: {
              xs: "100%",
              md: "20%",
            },
            fontSize: "1rem",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#1976d2",
            },
          }}
        >
          جستجو
        </Button>
      </Box>
      {resultItem.length ? (
        <>
          <Typography>نتیجه یافت شده</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ردیف</TableCell>
                  <TableCell>عنوان</TableCell>
                  <TableCell>کد</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {resultItem.map((item, i) => (
                  <TableRow>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.code}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <Alert severity="warning">کد دیتا را برای جستجو وارد کنید</Alert>
      )}
    </Box>
  );
}
