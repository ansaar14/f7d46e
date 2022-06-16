export const DOTS = "...";

function usePagination({ currentPage, totalCount, pageSize }) {
  /*
    Rewrite the logic here to map out the pagination to be displayed

    !!!!!! ATTENTION !!!!!!
    Please replace this comment here with a description of this hook.
    
  */
  // Calculate the total number of pages
  const totalPages = Math.ceil(totalCount / pageSize);
  // empty array to store the pagination
  let pages = [];

  // If there is only one page, display 1
  if (totalPages <= 1) {
    return [1];
  }
  // 1, 2, 3 ...13
  if (currentPage <= 2) {
    for (let i = 1; i <= 3; i++) {
      pages.push(i);
    }
    pages.push(DOTS);
    pages.push(totalPages);
    return pages;

    // 1 ...11, 12, 13
  } else if (currentPage >= totalPages - 1) {
    pages.push(1);
    pages.push(DOTS);
    for (let i = totalPages - 2; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  // 1 ... 2, 3, 4 ...13
  else {
    pages.push(1);
    pages.push(DOTS);
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      pages.push(i);
    }
    pages.push(DOTS);
    pages.push(totalPages);
    return pages;
  }
}

export default usePagination;
