import  React,{useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import '../App.css';

export default function ImgMediaCard() {
    const url="https://64f164b40e1e60602d23becb.mockapi.io/users";
    const[data,setData]=useState([]);
    const fetchInfo=()=>{
        return axios.get(url).then((res)=>setData(res.data));
    };
    useEffect(()=>{
        fetchInfo();
    },[]);
  return (
    <div className='cards'>
        {data.map((user) => (
    <Card key={user.id} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="User Avatar"
        height="140"
        image={user.avatar}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {user.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {user.mobile}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {user.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {user.createdAt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        ))}
    </div>
  );
}