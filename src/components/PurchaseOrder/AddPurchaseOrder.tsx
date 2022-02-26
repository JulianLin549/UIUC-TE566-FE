import React, {useState} from 'react';
import axios from "axios";
import {Button, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useHistory} from "react-router-dom";
const AddPurchaseOrder = () => {
    const history = useHistory();

    const [partId, setPartId] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    let value = parseInt(quantity) * parseFloat(unitPrice);
    value = (!isNaN(value)) ? value : 0;


    const handlePartIdChange = (event: any) => {
        setPartId(event.target.value);
    };
    const handleQuantityChange = (event: any) => {
        setQuantity(event.target.value);
    };
    const handleUnitPriceChange = (event: any) => {
        setUnitPrice(event.target.value);
    };
    const handleSubmit = async () => {
        if (!partId || !quantity || !unitPrice){
            alert("input field cannot be empty");
            return
        }
        try {
            const requestBody = {
                "partId": partId,
                "quantity": quantity,
                "unitPrice": unitPrice,
                "value": value
            };
            await axios.post(process.env.REACT_APP_BASE_URL + `/purchase-order`,
                requestBody);
            alert(`insert success!`)
            await history.push('/purchase-order')
        } catch (e) {
            alert("Failed to add")
        }
    };
    return (

        <Box m={2}>
            <Typography variant="h5" gutterBottom component="div">
                Add Purchase Order
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
                    <TextField id="standard-basic" label="Part Id" variant="standard" style = {{width: 400}}
                               onChange={handlePartIdChange}/>
                </div>
                <div>
                    <TextField id="standard-basic" label="Quantity" variant="standard" style = {{width: 400}}
                               onChange={handleQuantityChange}/>
                </div>
                <div>
                    <TextField id="standard-basic" label="Unit Price" style = {{width: 400}} variant="standard"
                               onChange={handleUnitPriceChange}/>
                </div>

                <Box m={2}>
                    <Typography variant="body1" gutterBottom component="div">
                        {`value: ${value} `}
                    </Typography>
                </Box>

                <Box m={2}>
                    <Button variant="outlined" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </Box>

    );
};

export default AddPurchaseOrder;
