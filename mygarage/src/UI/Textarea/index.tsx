import Textarea from "@mui/joy/Textarea";
import { styled } from "@mui/joy/styles";

const CustomTextarea = styled(Textarea)(() => ({
  width: "100%",
  color: "#707070",
  backgroundColor: "#dedede",
  fontFamily: "Barlow Condensed",
  fontWeight: "400",
  fontSize: "20px",
  "--Textarea-focusedHighlight": "transparent",
}));

export default CustomTextarea;
