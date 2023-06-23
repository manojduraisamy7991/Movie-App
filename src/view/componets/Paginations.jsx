import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Paginations(props) {
  const { data, perPage, setCurrentPage, currentPage } = props;
  // Calculate the total number of pages based on the data length and items per page
  const pageCount = Math.ceil(data.length / perPage);
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Stack spacing={2}>
        <Pagination
          count={pageCount}
          variant="outlined"
          shape="rounded"
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
}
