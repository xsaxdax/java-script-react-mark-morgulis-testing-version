import { CardActions } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from '@material-ui/core/List';
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import React from "react";
import History from "./History";

//https://www.robinwieruch.de/react-add-item-to-list



export const Results = ({ content }) => (


  <Card data-testid="results">
    <CardContent>
      <Typography variant="h5">Results</Typography>
      {/** @TODO: Add your implementation here */}
      {content ?
      <List >
      
        
          
          <React.Fragment> <History content={content} /></React.Fragment>
      </List>
      
       : null}
       {((contentArray) => [...contentArray, content])}
      {[content].map((content, index, contentArray) =>  ((contentArray) => [...contentArray, content]),console.log(content))}
      {/*https://h3manth.com/new/blog/2014/thisarg-in-javascript/ can t figure out how to get the List that is in History to work here*/}

    </CardContent>
    <CardActions>
      <Button
        variant="outlined" color="secondary"
      

      >
        Erase Results
        </Button>

    </CardActions>
  </Card>
);

Results.propTypes =
{
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number])
}
/*use : ...content, to get all the characters */


