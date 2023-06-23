import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MovieCard(props) {
  const { original_name, backdrop_path, title, release_date } = props.data;
  return (
    <Card
      sx={{
        borderRadius: '7px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="div"
        sx={{
          pt: '56.25%',
        }}
        image={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${backdrop_path}`}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {original_name}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography> {release_date}</Typography>
      </CardContent>
    </Card>
  );
}
