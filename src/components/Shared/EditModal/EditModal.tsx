import { Box, Button, Modal, TextField, Typography } from "@mui/material";

interface DetailProps {
  id: string;
  title: string;
  code: string;
  progress: string;
}

interface EditModalProps {
  onClick: () => void;
  isEditModalOpen: boolean;
  closeModal: () => void;
  editValue: string;
  setEditValue: (value: string) => void;
  details: DetailProps;
  onSaveEdit: () => Promise<void>;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "70%", md: "400px" },
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

export default function EditModal({
  onClick,
  details,
  isEditModalOpen,
  closeModal,
  setEditValue,
  editValue,
  onSaveEdit,
}: EditModalProps) {
  return (
    <Modal open={isEditModalOpen} onClose={closeModal}>
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" component="h2">
            ویرایش کد {details.code}
          </Typography>
          <svg
            onClick={closeModal}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{ width: "20px", cursor: "pointer", height: "20px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </Box>
        <Box
          component={"form"}
          sx={{
            display: "flex",
            gap: "15px",
            marginY: "20px",
            flexDirection: "column",
          }}
        >
          <TextField
            label="عنوان ..."
            sx={{ width: "100%" }}
            value={editValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEditValue(e.target.value)
            }
            type="text"
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={onSaveEdit}
            sx={{
              px: 4,
              py: 1,
              alignSelf: "flex-end",
              fontWeight: "bold",
              width: "100%",
              fontSize: "1rem",
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "#1976d2",
              },
            }}
          >
            ویرایش
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
