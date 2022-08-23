import React from "react";
import "./styleProductos.css";
import { useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import {
  FaShoppingCart,
  FaRegBookmark,
  FaStar,
  FaFireAlt,
} from "react-icons/fa";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const CardProductos = ({ productos }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [display, setDisplay] = useState("notdisplayed");
  const showButton = e => {
    e.preventDefault();
    setDisplay("displayed");
  };

  const hideButton = e => {
    e.preventDefault();
    setDisplay("notdisplayed");
  };

  const [isRed, setIsRed] = useState(true);

  return (
<Card sx={{ maxWidth: 345, maxHeight: 600 }}>
      <CardHeader
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={productos.name}
        subheader={productos.model}
      />
      <CardMedia
        component="img"
        height="150"
        image={productos.image}
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productos.totalSales} units sold
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {productos.timeLeft} days left
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  
  );
};

export default CardProductos;

{/* <div className="productList" onMouseEnter={e => showButton(e)}
        onMouseLeave={e => hideButton(e)}>
        <div key={productos.id} className="productCard">
          <img
            src={productos.image}
            alt="product-img"
            className="productImage"
          ></img>

          <FaShoppingCart className={"productCard__cart"} />
          <FaRegBookmark className={"productCard__wishlist"} style={{ color: isRed ? "black" : "red" }} onClick={() => {
            setIsRed(!isRed);
          }} />
          <FaFireAlt className={"productCard__fastSelling"} />

          <div className="productCard__content">
            <h3 className="productName">{productos.name}</h3>
            <div className="displayStack__1">
              <div className="productPrice">{productos.price}</div>
              <div className="productSales">
                {productos.totalSales} units sold
              </div>
            </div>
            <div className="displayStack__2">
              <div className="productRating">
                {[...Array(productos.rating)].map((index) => (
                  <FaStar id={index + 1} key={index} />
                ))}
              </div>
              <div className="productTime">
                {productos.timeLeft} days left
              </div>
            </div>
          </div>
          <button className={display}><strong>COMPRAR</strong></button>
        </div>
      </div> */}


    //   <Box
    //   sx={{
    //     display: 'flex',
    //     justifyContent: 'space-evenly',
    //     marginTop: '0.1rem',
    //     alignItems: 'center',
    //     flexDirection: 'column'
    //   }}
    // >
    //   <Box sx={{
    //     position: 'relative',
    //     backgroundColor: '#0000',
    //     margin: '1rem',
    //     flex: '1 0 25rem',
    //     maxWidth: '30rem',
    //     maxHeight: '50rem',
    //     transition: '0.2s',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     borderRadius: '10px',

    //   }}>

    //     <Typography variant="h2" sx={{
    //       fontSize: '1rem'
    //     }} >
    //       {productos.name}
    //     </Typography>

        














    //   </Box>
    // </Box >
