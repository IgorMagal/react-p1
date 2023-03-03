import { Outlet } from "react-router-dom";
import PostHeader from "../components/PostHeader";

const RootPage = () => {
  return (
    <>
      <PostHeader handleModal={() => {}} />

      <Outlet />
    </>
  );
};

export default RootPage;
