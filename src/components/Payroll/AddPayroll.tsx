import React, {useState} from 'react';
import axios from "axios";
import {Button, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useHistory} from "react-router-dom";
const AddPayroll = () => {
    const history = useHistory();

    const [employeeId, setEmployeeId] = useState('');
    const [amount, setAmount] = useState('');

    const handleEmployeeIdChange = (event: any) => {
        setEmployeeId(event.target.value);
    };
    const handleAmountChange = (event: any) => {
        setAmount(event.target.value);
    };

    const handleSubmit = async () => {
        if (!employeeId || !amount ){
            alert("input field cannot be empty");
            return
        }
        try {
            const requestBody = {
                "employeeId": employeeId,
                "amount": amount,
            };
            await axios.post(process.env.REACT_APP_BASE_URL + `/payroll`,
                requestBody);
            alert(`insert success!`)
            await history.push('/payroll')
        } catch (e) {
            alert("Failed to add")
        }
    };
    return (

        <Box m={2}>
            <Typography variant="h5" gutterBottom component="div">
                Add Payroll
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
                    <TextField id="standard-basic" label="Employee Id" variant="standard" style = {{width: 400}}
                               onChange={handleEmployeeIdChange}/>
                </div>
                <div>
                    <TextField id="standard-basic" label="Amount" variant="standard" style = {{width: 400}}
                               onChange={handleAmountChange}/>
                </div>

                <Box m={2}>
                    <Button variant="outlined" onClick={handleSubmit}>
                        Pay
                    </Button>
                </Box>
            </Box>
        </Box>

    );
};

export default AddPayroll;
