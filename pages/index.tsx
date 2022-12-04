import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>QuizApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box w="100%" h="100vh">
          <Navbar />
          <Box>Hello</Box>
        </Box>
      </main>
      <footer></footer>
    </div>
  );
}
