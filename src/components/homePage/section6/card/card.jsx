import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Sect6Card({title, text, picture}) {
  return (
    <Card sx={{ width: "26vw", maxWidth: "26vw", height: "70vh", maxHeight: "70vh", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <CardActionArea sx={{ flexGrow: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image={picture}
        alt="green iguana"
        sx={{
          height: "30vh",
          maxHeight: "30vh",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold", fontSize: "3.6vh" }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Poppins, sans-serif", fontSize: "2vh" }}>
          {text}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions sx={{ padding: '16px' }}>
      <Button size="small" color="primary" sx={{ fontFamily: "Poppins, sans-serif", fontSize: "2vh", position: "relative", bottom: "2vh" }}>
        Compare plans &#8594;
      </Button>
    </CardActions>
  </Card>
  );
}