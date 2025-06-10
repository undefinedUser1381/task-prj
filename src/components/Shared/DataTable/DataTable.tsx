import { Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Alert } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import type { DataProps } from "../../../interfaces/data";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useState } from "react";
import { deleteActivity, editActivity } from "../../../services/api/activities";
import { deleteAim, editAim } from "../../../services/api/aims";
import { deletePlan, editPlan } from "../../../services/api/plans";
import EditModal from "../EditModal/EditModal";

interface DataTableProps {
  page: string;
  dataTable: DataProps[];
  title: "aims" | "activities" | "plans";
  refetch: () => Promise<void>;
}

export default function DataTable({
  page,
  title,
  dataTable,
  refetch,
}: DataTableProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);
  const closeEditModal = () => setIsEditModalOpen(false);
  const [deleteId, setDeleteId] = useState("0");
  const [findedItem, setFindedItem] = useState<DataProps | null>(null);
  const [editValue, setEditValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const findEditedItem = (id: string) => {
    const findItemToEdit = dataTable.find((item) => item.id === id);
    if (findItemToEdit) {
      setFindedItem(findItemToEdit);
    }
  };

  const handleDeleteItems = async () => {
    if (title === "aims") {
      await deleteAim(deleteId);
      refetch();
    } else if (title === "plans") {
      await deletePlan(deleteId);
      refetch();
    } else if (title === "activities") {
      await deleteActivity(deleteId);
      refetch();
    }

    setIsDeleteModalOpen(false);
  };

  const handleUpdateItems = async () => {
    let response;
    setIsLoading(true)

    if (title === "aims" && findedItem)
      response = await editAim({ ...findedItem, title: editValue });
    else if (title === "plans" && findedItem)
      response = await editPlan({ ...findedItem, title: editValue });
    else if (title === "activities" && findedItem)
      response = await editActivity({ ...findedItem, title: editValue });

    if (response?.status === 200) {
      setIsEditModalOpen(false);
      refetch();
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <Typography component={"h2"} color="blue" fontSize={"18px"}>
        {page}
      </Typography>
      {dataTable.length ? (
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, height: "15rem" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">ردیف</TableCell>
                <TableCell align="center">عنوان {page.slice(5, 12)}</TableCell>
                <TableCell align="center">کد</TableCell>
                <TableCell align="center">درصد پیشرفت</TableCell>
                <TableCell align="center">عملیات</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataTable?.map((row, i) => (
                <TableRow sx={{ height: "3rem" }} key={i + 1}>
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="center">{row.title}</TableCell>
                  <TableCell align="center">{row.code}</TableCell>
                  <TableCell align="center">
                    <Box
                      sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                        backgroundColor: "#F2F2F2",
                      }}
                    >
                      <Box
                        sx={{
                          width: `${row.progress}`,
                          borderRadius: "inherit",
                          textAlign: "center",
                          color: "white",
                          backgroundColor: "#1976d2",
                        }}
                      >
                        {row.progress}
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "4rem",
                    }}
                    align="center"
                  >
                    <Box
                      onClick={() => {
                        setIsDeleteModalOpen(true);
                        setDeleteId(row.id);
                      }}
                    >
                      <DeleteIcon
                        sx={{
                          color: "red",
                          transition: "all 0.3s",
                          cursor: "pointer",
                          "&:hover": { opacity: "0.6" },
                        }}
                      />
                    </Box>
                    <Box
                      onClick={() => {
                        setIsEditModalOpen(true);
                        findEditedItem(row.id);
                      }}
                    >
                      <EditIcon
                        sx={{
                          color: "yellow",
                          transition: "all 0.3s",
                          cursor: "pointer",
                          "&:hover": { opacity: "0.6" },
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Alert severity="error">دیتایی جهت نمایش وجود ندارد !</Alert>
      )}
      <DeleteModal
        onClick={handleDeleteItems}
        isModalOpen={isDeleteModalOpen}
        closeModal={closeDeleteModal}
      />
      {findedItem && (
        <EditModal
          onClick={() => {}}
          isEditModalOpen={isEditModalOpen}
          closeModal={closeEditModal}
          details={findedItem}
          editValue={editValue}
          setEditValue={setEditValue}
          onSaveEdit={handleUpdateItems}
          isLoading={isLoading}
        />
      )}
    </Box>
  );
}
