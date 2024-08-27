import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function InsCard({...props}) {
  return (
    <Card sx={{ width: "17vw", minWidth: "17vw", maxWidth:"17vw", height: "25vh", minHeight: "25vh", maxHeight: "25vh",boxShadow: "1vh 1vh 1vh lightblue" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.logo}
          alt="green iguana"
          sx={{
            width: "30%",
            height: "30%",
            position: "relative",
            left: "6vw"
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{position: "absolute", left: "4vw", fontSize:"3.5vh"}}>
            {props.insurance}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}