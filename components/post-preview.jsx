import AvatarProfile from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";

// ESTE COMPONENTE YA NO SE UTILIZA MÁS PERO LO DEJO POR LAS DUDAS
const PostPreview = ({ title, coverImage, date, excerpt, author, slug }) => {
  return (
    <div>
      <div className="">
        <CoverImage
          slug={slug}
          title={title}
          imageObject={coverImage}
          url={imageBuilder(coverImage).url()}
        />
      </div>
      <h3 className="">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="">{title}</a>
        </Link>
      </h3>
      <div className="">
        <Date dateString={date} />
      </div>
      <p className="">{excerpt}</p>
      <AvatarProfile name={author?.name} picture={author?.picture} />
    </div>
  );
};

export default PostPreview;
