import { IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

interface ClearInputButtonProps {
  onClear: () => void;
}

const ClearInputButton = ({ onClear }: ClearInputButtonProps) => {
  return (
    <IconButton
      isRound={true}
      variant="ghost"
      size="sm"
      colorScheme="orange"
      aria-label="Clear Input"
      icon={<CloseIcon />}
      onClick={onClear}
    />
  );
};

export default ClearInputButton;
