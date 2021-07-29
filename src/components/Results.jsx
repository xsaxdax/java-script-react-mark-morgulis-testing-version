import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { CardActions } from "@material-ui/core";
import Button from "@material-ui/core/Button"



export const Results = ({ content}) => (

  <Card data-testid="results">
    <CardContent>
      <Typography variant="h5">Results</Typography>
      {/** @TODO: Add your implementation here */}
      {content}
    
    {/* ?..:.. doesnt work*/}     
      </CardContent>
    <CardActions>
    <Button
          variant="outlined" color="secondary"
          onClick={() =>localStorage.removeItem('myValueInLocalStorage')
          
            }
            
        >
          Erase Results
        </Button>
        
      </CardActions>
  </Card>
);

/*use : ...content, to get all the characters */
      
{/* <List  >
        
{[localStorage.getItem('myValueInLocalStorage')].forEach(( content, index) => (


  <ListItem key={index}>
    <ListItemText primary={content} />
  </ListItem>

))} 
<Divider variant="full width" component="li" />
</List> */}