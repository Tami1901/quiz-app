import React from "react";
import { Box, Divider, Flex, Heading, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Navbar: React.FC<{}> = () => {
  const router = useRouter();

  return (
    <>
      <Flex justify="space-between" p={4} borderBottom="1px solid black">
        <Heading onClick={() => router.push("/")} as="button">
          QuizApp
        </Heading>
        <Box>
          <Box p={2}>
            <Link
              p={2}
              onClick={() => router.push("/signin")}
              fontWeight={
                router.pathname === "/signin" ? "extrabold" : "normal"
              }
            >
              Sign In
            </Link>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
