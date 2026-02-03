import React from "react";
import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";

type PostPageProps = {};

const PostsPage: React.FC<PostPageProps> = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />

      <PostsTable />

      <PostsPagination />
    </>
  );
};

export default PostsPage;
