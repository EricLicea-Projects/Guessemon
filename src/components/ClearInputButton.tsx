import { IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

interface ClearInputButtonProps {
  onClear: () => void;
  size?: string;
  colorScheme?: string;
}

const ClearInputButton = ({
  onClear,
  size = "xs",
  colorScheme = "teal",
}: ClearInputButtonProps) => {
  return (
    <IconButton
      isRound={true}
      variant="ghost"
      colorScheme={colorScheme}
      size={size}
      aria-label="Clear Input"
      icon={<CloseIcon />}
      onClick={onClear}
    />
  );
};

export default ClearInputButton;
