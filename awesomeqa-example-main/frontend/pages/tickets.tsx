import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Paper, Typography } from '@mui/material';

const TicketsPage = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/tickets')
      .then(response => {
        if(response.data && Array.isArray(response.data)) {
          setTickets(response.data); // Directly setting the array of tickets
        } else {
          // Handle case where data is not in the expected format
          console.error('Unexpected response format:', response.data);
        }
      })
      .catch(error => console.error('Error fetching tickets', error));
  }, []);
  

  const handleDelete = (ticketId: string) => {
    axios.delete(`http://localhost:5001/tickets/${ticketId}`)
      .then(() => {
        setTickets(tickets.filter(ticket => ticket.id !== ticketId));
      })
      .catch(error => {
        console.error('Error deleting ticket', error);
      });
  };
  

  return (
    <div style={{ padding: '20px' }}>
      {tickets && tickets.length > 0 ? (
        tickets.map(ticket => (
          <Paper key={ticket.id} style={{ margin: '10px', padding: '10px' }}>
            <Typography variant="h6">Message ID: {ticket.msg_id}</Typography>
            <Typography variant="body1">Asked on: {ticket.timestamp}</Typography>
            <Button variant="outlined" href={ticket.msg_url} target="_blank">Open Message</Button>
            <Button variant="contained" color="secondary" onClick={() => handleDelete(ticket.id)} style={{ marginLeft: '10px' }}>Delete</Button>
          </Paper>
        ))
      ) : (
        <Typography variant="body1">No tickets available.</Typography>
      )}
    </div>
  );
};

export default TicketsPage;
