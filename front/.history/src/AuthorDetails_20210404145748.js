import { useParams } from "react-router";

function AuthorDetails() {
  const { id } = useParams();
  return <div>Author Details - {id}</div>;
}

export default AuthorDetails;
