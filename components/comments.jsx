import { Heading, Box } from "@chakra-ui/react"

import Date from "./date";

const Comments = ({ comments = [] }) => {
  return (
    <Box pt={12}>
      <Heading>
        Comentarios:
      </Heading>
      <ul>
        {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <li key={_id} className="">
            <hr className="" />
            <h4 className="">
              <a href={`mailto:${email}`}>{name}</a> (
              <Date dateString={_createdAt} />)
            </h4>
            <p>{comment}</p>
            <hr className="" />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Comments;
