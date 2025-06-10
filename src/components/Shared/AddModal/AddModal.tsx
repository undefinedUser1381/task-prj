import { Modal, Typography, Box, TextField, Button } from "@mui/material";

interface ModalProps {
  isOpenModal: boolean;
  handleCloseModal: () => void;
  handleCreate : () => Promise<void>
  modalTitle : string;
  value : string;
  setValue : (value : string) => void;
}

export default function AddModal({
  isOpenModal,
  handleCloseModal,
  handleCreate,
  modalTitle,
  value,
  setValue
}: ModalProps) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs : "70%" , md : "400px"},
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal open={isOpenModal} onClose={handleCloseModal}>
      <Box sx={style}>
        <Box sx={{display : "flex" , alignItems : "center" , justifyContent : "space-between"}}>
         <Typography variant="h6" component="h2">
           اضافه کردن {modalTitle} جدید
         </Typography>
         <svg onClick={handleCloseModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width : "20px" , cursor : "pointer" , height : "20px"}}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
         </svg>
        </Box>
        <Box component={"form"} sx={{display : "flex", gap:"15px", marginY : "20px" , flexDirection : "column"}}>
          <TextField
            label="عنوان ..."
            value={value}
            onChange={(e : React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            sx={{ width: "100%"}}
            type="text"
            variant="outlined"
          />
         <Button
         variant="contained"
         color="primary"
         onClick={handleCreate}
         sx={{
          px: 4,
          py: 1,
          alignSelf : "flex-end",
          fontWeight: "bold",
          width : "100%",
          fontSize: "1rem",
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "#1976d2",
          },
         }}
      >
       اضافه کردن
         </Button>
        </Box>
      </Box>
    </Modal>
  );
}
