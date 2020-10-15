import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerpage, setPostsPerPage] = useState(10);

  // useEffect is same as componentDidMount on class
  //  useEffect run when component mount or whenever component update
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      // const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const res = await axios.get(
        "https://0e7c44bc-4a33-4a88-b5d1-d8e62021bdbe.mock.pstmn.io/get"
      );

      console.log(res.data);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  //  [] above means it runs only when component mount
  // console.log("posts", posts);

  //calculating index of the post per page
  const indexofLastPost = currentPage * postsPerpage;
  const indexofFirstPost = indexofLastPost - postsPerpage;
  const currentPosts = posts.slice(indexofFirstPost, indexofLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerpage}
        totalPosts={posts.length}
        paginate={paginate}
      ></Pagination>
    </div>
  );
};

export default App;
