import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import './footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
    <Stack spacing={1}>
      <Pagination count={7} shape="rounded" />
    </Stack>

    </div>
  )
}

export default Footer