import { Await, defer, useLoaderData } from "react-router-dom";
import Ipost from "../models/PostInterface";
import PostsList from "../components/PostsList";

import LoadingSpinner from "../components/LoadingSpinner";
import React from "react";
import { getAllPosts } from "../services/PostService";

const PostsPage: React.FC = () => {
  const { posts } = useLoaderData() as { posts: Ipost[] };
  return (
    <React.Suspense fallback={<LoadingSpinner />}>
      <Await
        resolve={posts}
        children={(resolvedPosts) => {
          return <PostsList posts={resolvedPosts} />;
        }}
      />
    </React.Suspense>
  );
};

export default PostsPage;

export const loader = async () => {
  try {
    const loadedPosts = await getAllPosts();
    return defer({ posts: loadedPosts });
  } catch (e) {
    throw new Response(JSON.stringify({ message: "Unable to fetch posts." }), {
      status: 500,
    });
  }
};
