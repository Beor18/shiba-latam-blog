import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"

const AvatarProfile = ({ name, picture }) => {
  return (
    <div>
      <Avatar
        size="md"
        src={picture}
        alt={name}
      />
      {/* <div className="">{name}</div> */}
    </div>
  );
};

export default AvatarProfile;
