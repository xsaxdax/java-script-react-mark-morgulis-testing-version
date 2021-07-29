import React, {  useRef, useState  } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";

export const ExpressionInput = ({ handleSubmit }) => {

 
  const valueRef = useRef('') //creating a refernce for TextField Component
  const [helperText, setHelperText] = useState("");

    const addEntryClick = () => { 
      if(valueRef.current.value===""){
        setHelperText("No Input! Try again please")
        return
      }
      else{
        setHelperText('')
      }

      let oldArray= localStorage.getItem('myValueInLocalStorage')
      let newArray= []
      if(oldArray===null){
        oldArray=[valueRef.current.value]
        localStorage.setItem('myValueInLocalStorage', oldArray)
        return [valueRef.current.value, <li>{oldArray}</li>]
      }
      else{
      newArray=[oldArray,valueRef.current.value]
      localStorage.setItem('myValueInLocalStorage', newArray)
      return [valueRef.current.value, <li>{newArray}</li>]
      }
  };

 

 return (
   
    <Card>
      <CardContent>
        <TextField fullWidth={true} label="Expression" variant="outlined"
         inputRef={valueRef} helperText={helperText }/>
         {/*making a direct reference to the value from the input field from the DOM*/}
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleSubmit(
            /** @TODO: Add your implementation here */

         addEntryClick() 
         
            )}
            
        >
          Submit
        </Button>
        
      </CardActions>
    </Card>
  );
};
