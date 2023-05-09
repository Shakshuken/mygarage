/* @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FC, PropsWithChildren } from "react";

const H1 = styled.h1`
  margin: 0;
  color: #f5f5f5;
  font-weight: 400;
  font-size: 48px;
  font-family: "Barlow Condensed";
`;
const H2 = styled.h2`
  margin: 0;
  color: #f5f5f5;
  font-weight: 400;
  font-size: 24px;
  font-family: "Barlow Condensed";
`;

const Paragraph = styled.p`
  margin: 0;
  color: #f5f5f5;
  font-weight: 400;
  font-size: 20px;
  font-family: "Barlow Condensed";
`;

const PSlim = styled.p`
  margin: 0;
  color: #f5f5f5;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  font-family: "Barlow Condensed";
`;

type TypographyProps = {
  variant: "h1" | "h2" | "p" | "slim";
  color: "primary" | "secondary" | "success";
};

const colorToCodeMap = {
  primary: "#f5f5f5",
  secondary: "#cecece",
  success: "#17F056",
};

const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  variant,
  color,
  children,
}) => {
  const colorCode = colorToCodeMap[color];

  return (
    <>
      {variant === "h1" && (
        <H1
          css={css`
            color: ${colorCode};
          `}
        >
          {children}
        </H1>
      )}
      {variant === "h2" && (
        <H2
          css={css`
            color: ${colorCode};
          `}
        >
          {children}
        </H2>
      )}
      {variant === "p" && (
        <Paragraph
          css={css`
            color: ${colorCode};
          `}
        >
          {children}
        </Paragraph>
      )}
      {variant === "slim" && (
        <PSlim
          css={css`
            color: ${colorCode};
          `}
        >
          {children}
        </PSlim>
      )}
    </>
  );
};

export default Typography;
