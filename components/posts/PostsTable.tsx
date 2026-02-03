import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import Link from "next/link";
import posts from "@/data/posts";
import { Post } from "@/types/posts";
import { Button } from "../ui/button";

type PostsTableProps = {
  limit?: number;
  title?: string;
};

const PostsTable: React.FC<PostsTableProps> = ({ limit, title }) => {
  // Sort posts in descending order by date
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  // Limit the number of posts if a limit is provided
  const postsToDisplay = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">{title ?? "Posts"}</h3>

      <Table>
        {/* <TableCaption>A list of recent posts</TableCaption> */}

        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>

            <TableHead className="hidden md:table-cell">Author</TableHead>

            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>

            <TableHead className="">View</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {postsToDisplay?.map((post: Post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>

              <TableCell className="hidden md:table-cell">
                {post.author}
              </TableCell>

              <TableCell className="hidden md:table-cell text-right">
                {new Date(post.date).toLocaleDateString("en-GB")}
              </TableCell>

              <TableCell>
                <Link
                  href={`/posts/edit/${post.id}`}
                  className="text-blue-600 hover:underline"
                >
                  <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                    Edit
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostsTable;
