import { getUsers, deleteUser } from "../Service/api";
import { useEffect , useState} from "react";
import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    table:{
        width: "90%",
        margin: "50px 0 0 50px"
    },
    thead:{
        '& > *':{
            background:"#000000",
            color:"#ffffff",
            fontsize: 20
        },
    row:{
        fontsize: 20
        }
    }
})

const AllUser = () => {
    const classes= useStyle();

const [users, setUser] = useState([])

    useEffect(() => {
        getAllUser();
    }, [])
    const getAllUser = async () =>{
       const response = await getUsers();
       setUser(response.data);
    }

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUser();
    }
    return(
    <Table className = {classes.table}>
        <TableHead>
            <TableRow className={classes.thead}>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                users.map(user =>(
                    <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button variant="contained" color="primary" component={Link} to={`/edit/${user.id}`} style={{ marginRight : "10px"}}>Edit</Button>
                            <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>delete</Button>
                        </TableCell>
                    </TableRow>

                ))
            }
        </TableBody>
    </Table>
    )
}
export default AllUser;