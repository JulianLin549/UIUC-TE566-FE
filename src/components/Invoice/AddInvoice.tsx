import React, {useState} from 'react';
import axios from "axios";
import {Button, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useHistory} from "react-router-dom";
const AddInvoice = () => {
    const history = useHistory();

    const [customerId, setCustomerId] = useState('');
    const [quantity, setQuantity] = useState('');
    const [value, setValue] = useState('');

    const handleCustomerIdChange = (event: any) => {
        setCustomerId(event.target.value);
    };
    const handleQuantityChange = (event: any) => {
        setQuantity(event.target.value);
    };
    const handleValueChange = (event: any) => {
        setValue(event.target.value);
    };
    const handleSubmit = async () => {
        if (!customerId || !quantity || !value){
            alert("input field cannot be empty");
            return
        }
        try {
            const requestBody = {
                "customerId": customerId,
                "quantity": quantity,
                "value": value
            };
            await axios.post(process.env.REACT_APP_BASE_URL + `/invoice`,
                requestBody);
            alert(`insert success!`)
            await history.push('/invoice')
        } catch (e) {
            alert("Failed to add")
        }
    };
    return (

        <Box m={2}>
            <Typography variant="h5" gutterBottom component="div">
                Add Invoice
            </Typography>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField id="standard-basic" label="Customer Id" variant="standard" style = {{width: 400}}
                               onChange={handleCustomerIdChange}/>
                </div>
                <div>
                    <TextField id="standard-basic" label="Quantity" variant="standard" style = {{width: 400}}
                               onChange={handleQuantityChange}/>
                </div>
                <div>
                    <TextField id="standard-basic" label="Value" style = {{width: 400}} variant="standard"
                               onChange={handleValueChange}/>
                </div>

                <Box m={2}>
                    <Button variant="outlined" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </Box>

    );
};

export default AddInvoice;
