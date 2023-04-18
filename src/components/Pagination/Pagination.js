import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';

export const SitePagination = ({ pages, handleChange, currentPage }) => {
  return (
    <Stack spacing={2}>
      <Pagination
        renderItem={i => {
          return (
            <Link to={`/movies/pages/${i.page}`}>
              <PaginationItem {...i} />
            </Link>
          );
        }}
        count={pages}
        variant="outlined"
        shape="rounded"
        page={currentPage}
        onChange={(e, v) => {
          handleChange(v);
        }}
      />
    </Stack>
  );
};
