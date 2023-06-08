import styled from "@emotion/styled";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";

const CustomDatePicker = styled(DatePicker)(() => ({
  width: "100%",
  color: "#707070",
  backgroundColor: "#dedede",
  fontFamily: "Barlow Condensed",
  fontWeight: "400",
  fontSize: "20px",
  borderRadius: "12px",
  height: "44px",
  padding: 0,
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },

  "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
    borderRadius: "12px",
  },
  "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
    paddingTop: "12px",
    paddingBottom: "10px",
  },
  "& .css-1yq5fb3-MuiButtonBase-root-MuiIconButton-root": {
    paddingTop: "7px",
  },
}));

export default CustomDatePicker;
