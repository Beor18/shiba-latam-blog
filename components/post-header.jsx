import { Grid, GridItem, Flex, Spacer, Box, Center } from "@chakra-ui/react";

import AvatarProfile from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import { imageBuilder } from "../lib/sanity";

const PostHeader = ({ title, coverImage, date, author }) => {
  return (
    <Grid templateColumns="repeat(1, 1fr)" gap={6}>
      <PostTitle>{title}</PostTitle>
      <div className="">
        <CoverImage title={title} imageObject={coverImage} url={coverImage} />
      </div>

      <Grid h="50px">
        <GridItem>
          <Flex>
            <Box>
              <AvatarProfile name={author?.name} picture={author?.picture} />
            </Box>

            <Box px={4} m={3}>
              <Center>
                <Date dateString={date} />
              </Center>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Grid>
  );
};

export default PostHeader;
