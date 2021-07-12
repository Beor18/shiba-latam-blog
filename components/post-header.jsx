import AvatarProfile from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import { imageBuilder } from "../lib/sanity";

const PostHeader = ({ title, coverImage, date, author }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      {/* <div className="hidden md:block md:mb-12">
        <AvatarProfile name={author?.name} picture={author?.picture} />
      </div> */}
      <div className="">
        <CoverImage title={title} imageObject={coverImage} url={coverImage} />
      </div>
      <div className="">
        <div className="">
          <AvatarProfile name={author?.name} picture={author?.picture} />
        </div>
        <div className="">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
