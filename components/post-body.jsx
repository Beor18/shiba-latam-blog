import { Box } from "@chakra-ui/react"

import BlockContent from "@sanity/block-content-to-react";

const PostBody = ({ content }) => {
  return (
    <Box pt={16} fontSize={18} fontWeight={400} fontFamily={"roboto"}>
      <BlockContent
        blocks={content}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
      />
    </Box>
  );
};

export default PostBody;
