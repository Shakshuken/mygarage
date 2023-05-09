import styled from "@emotion/styled";

type TextFieldProps = {
  isError?: boolean;
};

const TextField = styled.input<TextFieldProps>`
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  min-width: 165px;
  background-color: #dedede;
  color: #707070;
  border-radius: 12px;
  border: none;
  font-family: "Barlow Condensed";
  font-weight: 400;
  font-size: 20px;

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &::file-selector-button {
    all: unset;
    display: none;
  }
`;

export default TextField;
