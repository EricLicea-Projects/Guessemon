import { IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

interface ClearInputButtonProps {
  onClear: () => void;
}

const ClearInputButton = ({ onClear }: ClearInputButtonProps) => {
  return (
    <IconButton
      isRound={true}
      variant="filled"
      size="sm"
      color="rgba(0, 255, 221, 1)"
      aria-label="Clear Input"
      icon={<CloseIcon />}
      onClick={onClear}
    />
  );
};

export default ClearInputButton;
