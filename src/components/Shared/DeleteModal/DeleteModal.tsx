import { Box, Button, Modal, Typography } from "@mui/material";

interface DeleteModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  onClick: () => void;
}

export default function DeleteModal({
  isModalOpen,
  closeModal,
  onClick,
}: DeleteModalProps) {
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
    <Modal open={isModalOpen} onClose={closeModal}>
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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
        <Typography
          sx={{ marginTop: "20px", fontWeight: "500", fontSize: "19px" }}
        >
          آیا مایل به حذف هستید ؟
        </Typography>
        <Box
          sx={{
            display: "flex",
            marginTop: "20px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Button
            variant="contained"
            onClick={closeModal}
            sx={{
              px: 4,
              backgroundColor: "white",
              color:"black",
              py: 1,
              fontWeight: "bold",
              width: "45%",
              fontSize: "1rem",
              transition: "0.3s",
              "&:hover": {
                opacity: "0.8",
              },
            }}
          >
            خیر
          </Button>
          <Button
            onClick={onClick}
            variant="contained"
            sx={{
              px: 4,
              backgroundColor: "red",
              color: "white",
              py: 1,
              fontWeight: "bold",
              width: "45%",
              fontSize: "1rem",
              transition: "0.3s",
              "&:hover": {
                opacity: "0.8",
              },
            }}
          >
            بله
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
