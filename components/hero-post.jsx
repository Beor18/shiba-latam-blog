import { Heading } from "@chakra-ui/react";

import AvatarProfile from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

const HeroPost = ({ title, coverImage, date, excerpt, author, slug }) => {
  return (
    <section>
      <div className="">
        <CoverImage
          slug={slug}
          imageObject={coverImage}
          title={title}
          url={coverImage}
        />
      </div>
      <div className="">
        <div>
          <Heading pt={4}>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </Heading>
          <div className="">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="">{excerpt}</p>
          <AvatarProfile name={author?.name} picture={author?.picture} />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
