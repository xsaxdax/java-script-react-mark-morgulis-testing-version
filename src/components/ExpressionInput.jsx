import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";

export const ExpressionInput = ({ handleSubmit }) => {

  const handle = () => console.log("hi") ;

 return (
   
    <Card>
      <CardContent>
        <TextField fullWidth={true} label="Expression" variant="outlined" />
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleSubmit(
            /** @TODO: Add your implementation here */
          handle
          )}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
};
