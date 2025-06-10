import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import AddModal from "../AddModal/AddModal";
import { createNewAim } from "../../../services/api/aims";
import { createNewPlan } from "../../../services/api/plans";
import { createNewActivity } from "../../../services/api/activities";

interface AddComponentProp {
  componentTitle: string;
  title: string;
  refetch: () => Promise<void>;
}

export default function AddComponent({
  componentTitle,
  title,
  refetch,
}: AddComponentProp) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const openAddModal = () => setOpen(true);
  const closeAddModal = () => setOpen(false);

  const handleAdditems = async () => {
    setIsLoading(true);

    const newitem = {
      id: crypto.randomUUID().toString(),
      title: value,
      code: Math.floor(Math.random() * 1000000).toString(),
      progress: Math.floor(Math.random() * 100).toString() + "%",
    };

    let response;

    if (title === "aims") response = await createNewAim(newitem);
    else if (title === "plans") response = await createNewPlan(newitem);
    else if (title === "activities")
      response = await createNewActivity(newitem);

    if (response?.status === 201) {
      refetch();
      setValue("");
      setIsLoading(false);
      closeAddModal();
    }
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
      sx={{ backgroundColor: "#FFFFFF", width: { xs: "92%", md: "97%" } }}
    >
      <Typography component={"h2"} color="blue" fontSize={"18px"}>
        اضافه کردن
      </Typography>
      <Button
        onClick={openAddModal}
        variant="contained"
        color="primary"
        sx={{
          px: 4,
          py: 1,
          display: "flex",
          alignItems: "center",
          gap: "5px",
          alignSelf: "flex-end",
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
        اضافه کردن
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          style={{ width: "20px", height: "20px" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </Button>
      <AddModal
        value={value}
        isLoading={isLoading}
        setValue={setValue}
        modalTitle={componentTitle}
        isOpenModal={open}
        handleCloseModal={closeAddModal}
        handleCreate={handleAdditems}
      />
    </Box>
  );
}
