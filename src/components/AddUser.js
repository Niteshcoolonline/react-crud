import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import { addUser } from "../Service/api";
import { useHistory } from "react-router-dom";
const useStyle = makeStyles(
    {
        container:{
            width: "50%",
            margin: '5% 0 0 25%',
            '& > *':{
                marginTop: 20
            }
        }
    }
)

//object create//
const initialvalues = {
    name: '',
    username: '',
    email: '',
    phone: ''

}

const AddUser = () => {
    const [user, setUser] = useState(initialvalues);
    const {name, username, email, phone} = user;
    const history = useHistory();
    const onValueChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }
    const addUserDetail = async () => {
        await addUser(user);
        history.push('/all');
    }
    const classes= useStyle();
    return(
        <FormGroup className={classes.container}>
            <Typography>Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="username" />
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="email" />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phone" />
                </FormControl>
            </FormControl>
            <Button variant="contained" onClick={() => addUserDetail()} color="primary">Add User</Button>
        </FormGroup>
    )
}
export default AddUser;