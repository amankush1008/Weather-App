import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({info}){
    let IMG_URL="https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    
    const RAIN_URL="https://media.istockphoto.com/id/1164520030/photo/rain-on-umbrella-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=956PGzmeuwcAxXARRp8qp99MeVAMZIhAzi5WxGb_ki0=";
    const COLD_URL="https://images.unsplash.com/photo-1480775661506-541bb9d526b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
   
    return (
        <div className="info-box">

            <div className="cardcontainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80
                        ? RAIN_URL
                        : info.temp > 15
                        ? HOT_URL
                        : COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    {
                        info.humidity > 80
                        ? <ThunderstormIcon />
                        : info.temp > 15
                        ? <WbSunnyIcon />
                        : <AcUnitIcon />
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        
                        <p>Tempearature : {info.temp}&deg;C</p>
                        <p>Min Temp : {info.tempMin}&deg;C</p>
                        <p>Max Temp : {info.tempMax}&deg;C</p>
                        <p>Humidty : {info.humidity}&deg;C</p>
                        <p>The Weather can be described as <b> <i>{info.weather}</i> </b> and feels Like : {info.feelsLike}&deg;C</p>

                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
             </Card>
            </div>
             
        </div>
    );
}