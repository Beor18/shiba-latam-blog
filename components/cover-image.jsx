import cn from "classnames";
import Link from "next/link";
import { Image } from "@chakra-ui/react";
import { imageBuilder } from "../lib/sanity";

const CoverImage = ({ title, url, imageObject, slug }) => {
  const image = (
    <Image
      src={imageBuilder(imageObject).width(1240).height(540).url()}
      alt={`Cover Image for ${title}`}
    />
  );

  return (
    <div className="">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
