import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const webinars = [
  { id: 1, title: 'Webinar 1', date: '2023-08-10' },
  { id: 2, title: 'Webinar 2', date: '2023-08-17' },
  // Add more webinars as needed
];

function WebinarList() {
  return (
    <List>
      {webinars.map((webinar) => (
        <ListItem key={webinar.id}>
          <ListItemText primary={webinar.title} secondary={webinar.date} />
        </ListItem>
      ))}
    </List>
  );
}

export default WebinarList;