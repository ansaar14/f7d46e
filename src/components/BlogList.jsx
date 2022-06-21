import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";

import { useState, useEffect } from "react";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [currentPaginationData, setCurrentPaginationData] = useState(
    blogs.posts.slice(0, 15)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [pageSizeOptions, setPageSizeOptions] = useState(PAGE_SIZES);
  const [totalCount, setTotalCount] = useState(blogs.posts.length);

  //change the page size
  const updateRowsPerPage = (pageSize) => {
    setPageSize(pageSize);
  };

  // change the current page
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // update the currentPaginationData based on the currentPage and pageSize
  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;
    const newPaginationData = blogs.posts.slice(startIndex, endIndex);

    setCurrentPaginationData(newPaginationData);
  }, [currentPage, pageSize]);

  // set current page to 1 when the page size changes
  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize]);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={pageSize}
        pageSizeOptions={pageSizeOptions}
        onPageChange={onPageChange}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
