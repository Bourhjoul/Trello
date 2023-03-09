import { Grid } from '@mui/material';
import React, { useState } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useNavigate } from 'react-router-dom';

interface BoardCardProps {
  title: string;
}

export function BoardCard({ title }: BoardCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Grid
      item
      container
      bgcolor="#006172"
      color="white"
      width="280px"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      borderRadius="2px"
      padding={1}
      height="85px"
      fontWeight="600"
      onClick={() => {
        navigate('/board/545');
      }}
      sx={{
        ':hover': {
          backgroundColor: '#005866',
        },
        cursor: 'pointer',
      }}
    >
      {title}
      {isHovering ? (
        <StarBorderIcon
          sx={{
            marginTop: 'auto',
            marginLeft: 'auto',
          }}
        />
      ) : null}
    </Grid>
  );
}
