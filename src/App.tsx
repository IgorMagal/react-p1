import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostsPage from "./pages/PostsPage";

import { AuthCtxProvider } from "./services/AuthCtxProvider";
import NewPostPage from "./pages/NewPostPage";
import EditPostPage from "./pages/EditPostPage";
import PostDetails from "./pages/PostDetails";
import ProfilePage from "./pages/ProfilePage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <PostsPage />,
        },
        {
          path: ":postId",
          children: [
            { index: true, element: <PostDetails /> },
            { path: "edit", element: <EditPostPage /> },
          ],
        },
        { path: "new", element: <NewPostPage /> },
        { path: "profile", element: <ProfilePage /> },
      ],
    },
  ]);
  return (
    <AuthCtxProvider>
      <RouterProvider router={router} />
    </AuthCtxProvider>
  );
}
export default App;
