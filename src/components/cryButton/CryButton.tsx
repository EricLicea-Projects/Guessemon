import { Button } from "@chakra-ui/react";
import { GiWolfHowl } from "react-icons/gi";
import { PuffLoader } from "react-spinners";
import useCryAudio from "@/components/cryButton/useCryAudio";

type Props = {
  cryId?: number;
};

const CryButton = ({ cryId = 25 }: Props) => {
  const { play, isPlaying } = useCryAudio(cryId);

  const handleClick = async () => {
    await play();
  };

  return (
    <Button
      size="sm"
      colorScheme="teal"
      variant="outline"
      onClick={handleClick}
      rightIcon={<GiWolfHowl size={23} />}
      isLoading={isPlaying}
      spinner={<PuffLoader speedMultiplier={10} size={45} color="teal" />}
    >
      Cry
    </Button>
  );
};

export default CryButton;
