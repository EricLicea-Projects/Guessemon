import type { SystemStyleObject } from "@chakra-ui/react";

export const IMAGE_PRESS_MOTION: SystemStyleObject = {
  transition: "transform 180ms ease",
  willChange: "transform",
  transformOrigin: "center",
  _groupHover: { transform: "scale(1.1)" },
  _groupActive: { transform: "scale(0.94)" },
};
