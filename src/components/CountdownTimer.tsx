import { useEffect, useState } from "react";
import { VStack, Text } from "@chakra-ui/react";

interface CountdownTimerProps {
  gameStatus: "won" | "lost";
}

const CountdownTimer = ({ gameStatus }: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const nextMidnightUTC = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate() + 1,
        0,
        0,
        0
      )
    );
    const difference = nextMidnightUTC.getTime() - now.getTime();

    let timeLeft = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const topMessage = gameStatus === "won" ? "Congrats!" : "Out of Pokéballs!";

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => String(time).padStart(2, "0");

  return (
    <VStack
      p={2}
      spacing={1}
      width={{ base: "90%", lg: "350px" }}
      bg="custom.primaryLight"
      color="custom.text"
      borderRadius="2xl"
      border="3px solid"
      borderColor="custom.primaryBorder"
    >
      <Text fontSize="sm">{topMessage}</Text>
      <Text fontSize="sm">Next Pokémon arrives in</Text>
      <Text fontSize="md">
        {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:
        {formatTime(timeLeft.seconds)}
      </Text>
    </VStack>
  );
};

export default CountdownTimer;
