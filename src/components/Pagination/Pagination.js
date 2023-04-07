import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const SitePagination = ({ pages, handleChange, currentPage }) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={pages}
        variant="outlined"
        shape="rounded"
        page={currentPage}
        onChange={(e, v) => {
          handleChange(v);
          console.log(e, v);
        }}
      />
    </Stack>
  );
};
