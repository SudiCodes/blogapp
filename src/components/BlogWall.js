import React, { useState, useEffect } from "react";
import { APIAxiosInstance } from "./AxiosInstance";
import BlogCard from "./Cards/BlogCard";

const BlogWall = () => {
  const [blogdata, setBlogdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await APIAxiosInstance.get("blogapp/blogs/");
        setBlogdata(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {blogdata.length > 0 ? (
          blogdata.map((blog, index) => (
            <li key={index}>
              {/* <p>ID: {blog.id}</p>
              <p>Content: {blog.content}</p> */}
              <BlogCard
                content={blog.content}
                title={blog.title}
                written_by={blog.uploaded_by}
                created_at={blog.created_at}
              />
            </li>
          ))
        ) : (
          <div>No Posts found</div>
        )}
      </ul>
    </div>
  );
};

export default BlogWall;
