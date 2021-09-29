import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import { editUser, getUsers } from "../Service/api";
import { useHistory, useParams } from "react-router-dom";
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

const EditUser = () => {
    const [user, setUser] = useState(initialvalues);
    const {name, username, email, phone} = user;
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        loadUserData();
    }, [])

    const loadUserData = async () => {
        const response = await getUsers(id);
        setUser(response.data)
    } 

    const onValueChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }
    const editUserDetail = async () => {
        await editUser(id, user);
        history.push('/all');
    }
    const classes= useStyle();
    return(
        <FormGroup className={classes.container}>
            <Typography>Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="username" value={username}/>
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="email" value={email}/>
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phone" value={phone}/>
                </FormControl>
            </FormControl>
            <Button variant="contained" onClick={() => editUserDetail()} color="primary">edit User</Button>
        </FormGroup>
    )
}
export default EditUser;