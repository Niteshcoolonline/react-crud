
import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        fontSize: 20,
        textDecoration: 'none'
    }
});

const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar className={classes.header} position='static'>
            <Toolbar>
                <NavLink className={classes.tabs} to="/" exact>
                    Monika Learning React
                </NavLink>
                <NavLink className={classes.tabs} to="/add" exact>
                    Add Users
                </NavLink>
                <NavLink className={classes.tabs} to="/all" exact>
                    All Users
                </NavLink>

            </Toolbar>
        </AppBar>
    )
}
export default NavBar;