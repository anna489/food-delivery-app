import * as React from "react";
import {
  Box,
  Button as MuiButton,
  Typography,
  Modal,
  Grid,
  Stack,
  styled,
} from "@mui/material";
import Image from "next/image";
import { Remove, Add, Close } from "@mui/icons-material";
import { Button, Input } from "../core";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 5,
  boxShadow: 22,
  p: 4,
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function CategoryModal({
  handleClose,
  open,
  newCategory,
  isLoading,
  handleChange,
  handleFileChange,
  handleSave,
}: any) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="h3">Ангилал нэмэх хэсэг</Typography>
            <MuiButton onClick={handleClose} sx={{ fontSize: 20 }}>
              x
            </MuiButton>
          </Stack>

          <Input
            name="name"
            label="Name"
            desc="Write category name"
            onChange={handleChange}
          />

          <Input
            name="description"
            label="Description"
            desc="Write category description"
            onChange={handleChange}
          />
          <Stack>
            <MuiButton
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              sx={{
                color: "white",
                justifyContent: "center",
                display: "flex",
              }}
            >
              Upload file
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </MuiButton>
          </Stack>

          <Button
            disabled={isLoading}
            label="Add"
            onClick={handleSave}
          ></Button>
        </Box>
      </Modal>
    </div>
  );
}
