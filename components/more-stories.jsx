import {
  SimpleGrid,
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
import Date from "./date";
import { imageBuilder } from "../lib/sanity";

const MoreStories = ({ posts }) => {
  return (
    <Box>
      <Heading mt={16} mb={8}>
        Más noticias:
      </Heading>
      <SimpleGrid templateColumns="repeat(3, 1fr)" gap={6}>
        {posts.map((post) => (
          <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
            <Box
              key={post.slug}
              maxW={"445px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
            >
              <Box
                h={"210px"}
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
                  src={imageBuilder(post.coverImage).url()}
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
                  {post.title}
                </Heading>
                <Text color={"gray.500"}>{post.excerpt}</Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <AvatarProfile picture={post.author?.picture} />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600}>{post.author?.name}</Text>
                  <Text color={"gray.500"}>
                    <Date dateString={post.date} />
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MoreStories;
