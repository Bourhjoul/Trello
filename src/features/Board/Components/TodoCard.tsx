import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

export function TodoCard() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <Grid
      my={1}
      p={1}
      container
      bgcolor="white"
      borderRadius="2px"
      boxShadow="0px 8px 10px -3px rgba(0,0,0,0.1)"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      sx={{
        ':hover': {
          background: '#f0f0f0',
          cursor: 'pointer',
        },
      }}
    >
      <Typography variant="caption" fontWeight="700">
        Todo 1
      </Typography>
      {isHovering && (
        <EditIcon
          sx={{
            fontSize: '0.8rem',
            marginLeft: 'auto',
            my: 'auto',
          }}
        />
      )}
    </Grid>
  );
}
