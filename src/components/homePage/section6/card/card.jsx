import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Sect6Card({title, text, picture}) {
  return (
    <Card sx={{ 
      width: "26vw", 
      maxWidth: "26vw", 
      height: "70vh", 
      maxHeight: "70vh", 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between',
      "@media (min-width: 300px) and (max-width: 840px)":{
        minWidth: "40vw",
        maxHeight:"40vh",
        flexWrap: "wrap"

      } 
      
       }}>
    <CardActionArea sx={{ flexGrow: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image={picture}
        alt="green iguana"
        sx={{
          height: "27vh",
          maxHeight: "27vh",
          "@media (min-width: 300px) and (max-width: 840px)":{
          maxHeight: "20vh"
          }
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ 
          fontFamily: "Poppins, sans-serif", 
          fontWeight: "bold", 
          fontSize: "3.6vh",
          "@media (min-width: 300px) and (max-width: 840px)":{
            fontSize: "1.7vh",

          }
          
          
          }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ 
          fontFamily: "Poppins, sans-serif", 
          fontSize: "2vh",
          "@media (min-width: 300px) and (max-width: 840px)":{
             fontSize: "1vh",
          }
          
          
          }}>
          {text}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions sx={{ padding: '16px' }}>
      <Button size="small" color="primary" sx={{ 
        fontFamily: "Poppins, sans-serif", 
        fontSize: "2vh", 
        position: "relative", 
        bottom: "2vh",
        "@media (min-width: 300px) and (max-width: 840px)":{
          fontSize: "1.1vh",
          position: "relative",
          top: "30vh",
        }
        }}>
        Compare plans &#8594;
      </Button>
    </CardActions>
  </Card>
  );
}