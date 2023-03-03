import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import LoginPage from "./pages/LoginPage";
import { AuthCtxProvider } from "./services/AuthCtxProvider";
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
        { path: "signin", element: <LoginPage /> },
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
