import React, {  useRef } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";

export const ExpressionInput = ({ handleSubmit }) => {

  //const [input, setInput] = useState();
  const valueRef = useRef('') //creating a refernce for TextField Component

    const sendValue = () => {
        return console.log(valueRef.current.value) //on clicking button accesing current value of TextField and outputing it to console 
    }


 return (
   
    <Card>
      <CardContent>
        <TextField fullWidth={true} label="Expression" variant="outlined"
         inputRef=
         {valueRef} />
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleSubmit(
            /** @TODO: Add your implementation here */
           // FormControlContext.Provider?
           //my Problem is I am not sure how access the textfield
           //console.log( input)
           //alert(input?.value)
           sendValue
           
            )}
        >
          Submit
        </Button>
        
      </CardActions>
    </Card>
  );
};
