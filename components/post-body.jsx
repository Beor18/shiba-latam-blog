import { Box } from "@chakra-ui/react"

import markdownStyles from "./markdown-styles.module.css";
import BlockContent from "@sanity/block-content-to-react";

const PostBody = ({ content }) => {
  return (
    <Box pt={16} fontSize={18} fontWeight={400} fontFamily={"roboto"}>
      <BlockContent
        blocks={content}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        className={markdownStyles.markdown}
      />
    </Box>
  );
};

export default PostBody;
