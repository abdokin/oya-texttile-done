import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Divider,
  Image,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import NextLink from "next/link";
import Logo from "./logo";
import TransDiv from "../components/TransDev";
import SocialButton from "./SocialButton";
import { leftPaths } from "../data/navdata";
const rightPaths = [
  {
    path: "/contact",
    label: "Contact",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/career",
    label: "Career",
  },
  {
    path: "/blog",
    label: "Blog",
  },
];

const ListSocial = () => {
  return (
    <Stack
      direction={"row"}
      w="full"
      spacing={6}
      _hover={{}}
      alignItems="center"
      justifyContent={"center"}
    >
      <TransDiv>
        <SocialButton
          label={"Twitter"}
          href={"https://twitter.com/Oyaevtekstili"}
        >
          <FaTwitter fill="#299D8C" style={{}} />
        </SocialButton>
      </TransDiv>
      <TransDiv>
        <SocialButton
          label={"YouTube"}
          href={
            "https://www.youtube.com/channel/UCaFjHW4MOhyVwvLbYoMoGIQhttp:/youtube.com"
          }
        >
          <FaYoutube fill="#299D8C" />
        </SocialButton>
      </TransDiv>
      <TransDiv>
        <SocialButton
          label={"Instagram"}
          href={"https://www.instagram.com/oyaevtekstili/"}
        >
          <FaInstagram fill="#299D8C" />
        </SocialButton>
      </TransDiv>
      <TransDiv>
        <SocialButton
          label={"Facebook"}
          href={"https://web.facebook.com/oyahomehoteltextile/?_rdc=1&_rdr"}
        >
          <FaFacebook fill="#299D8C" />
        </SocialButton>
      </TransDiv>
      <TransDiv>
        <SocialButton
          label={"Linkedin"}
          href={"https://www.linkedin.com/company/28625375/admin/"}
        >
          <FaLinkedin fill="#299D8C" />
        </SocialButton>
      </TransDiv>
    </Stack>
  );
};
export default function Footer() {
  return (
    <Box bg="white" color="black" py="8">
      <Divider />
      <Stack
        direction={{ lg: "row", base: "column" }}
        justifyContent="center"
        alignContent={"center"}
        spacing="16"
        w="full"
      >
        <Stack spacing={4} w="fit-content" alignSelf={"center"}>
          <Logo index="4" />
          <ListSocial />
        </Stack>
        <Stack
          align={{ lg: "flex-start", base: "center" }}
          fontSize="12"
          direction={{ base: "row", md: "column" }}
          justifyContent="center"
        >
          {leftPaths.map((path, i) => {
            return (
              <Link key={path.label}>
                <NextLink href={path.path}>{path.label}</NextLink>
              </Link>
            );
          })}
        </Stack>
        <Stack
          align={{ lg: "flex-start", base: "center" }}
          fontSize="12"
          direction={{ base: "row", md: "column" }}
          justifyContent="center"
        >
          {rightPaths.map((path, i) => {
            return (
              <Link key={path.label}>
                <NextLink href={path.path}>{path.label}</NextLink>
              </Link>
            );
          })}
        </Stack>
        <Stack
          align={"center"}
          px="6"
          direction="row"
          justifyContent={"center"}
          pt="8"
          marginLeft={"auto"}
        >
          <Box boxSize="74px" rounded="full">
            <Image src="/images/iso.jpg" alt="ISO" />
          </Box>
          <Box boxSize="74px" rounded="full">
            <Image src="/images/got.webp" alt="GOT GLOBAL ORGANIC " />
          </Box>
          <Box boxSize="74px" rounded="full">
            <Image src="/images/oeko.svg" alt="OEKO TEXTILLE" />
          </Box>
        </Stack>
      </Stack>
      <Text textAlign={"center"} fontSize={"md"} py="8">
        © 2022 OYA TEXTILE. All rights reserved
      </Text>
    </Box>
  );
}
