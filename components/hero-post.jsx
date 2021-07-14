import {
  Grid,
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

import AvatarProfile from "./avatar";
import { imageBuilder } from "../lib/sanity";

const HeroPost = ({ title, coverImage, date, excerpt, author, slug }) => {
  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={6}>
      <Grid>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <Box
            key={slug}
            maxW={"100%"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              //h={"510px"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Image
                boxSize="100%"
                align="center"
                objectFit="cover"
                src={imageBuilder(coverImage).url()}
                layout={"fill"}
              />
            </Box>
            <Stack>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                Blog
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                {title}
              </Heading>
              <Text color={"gray.500"}>{excerpt}</Text>
            </Stack>
            <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
              <AvatarProfile picture={author?.picture} />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>{author?.name}</Text>
                <Text color={"gray.500"}>
                  <Date dateString={date} />
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Link>
      </Grid>
    </Grid>
  );
};

export default HeroPost;
