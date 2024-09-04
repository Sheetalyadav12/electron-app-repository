import React from 'react';
import { Typography } from '@mui/material';

function Webinar({ title, date }) {
  return (
    <div>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="subtitle1">Date: {date}</Typography>
      {/* Add more details here (e.g., description, presenter, etc.) */}
    </div>
  );
}

export default Webinar;