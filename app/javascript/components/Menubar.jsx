import React from 'react'
import props from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

}));

/*const classes = useStyles();
const loginButton = props.username ?
    <Button color="inherit" href="/users/sign_out" data-method="delete">Logout</Button>
    : <Button color="inherit" href="/users/sign_in">login</Button>;
const pointButton = <Button className="sizeLarge" href="/users/sign_in">0pt</Button>;*/

export default class Menubar extends React.Component {
    constructor(props){
        super(props);
        this.classes = useStyles;
    }
    render(){
        return (
            <div className={this.classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={this.classes.title}>
                            テキスト編集システム
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
};