import React from "react"
import PropTypes from "prop-types"
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline';

class Menubar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Button variant="contained" color="secondary">
                    Hello World
                </Button>
            </React.Fragment>
        );
    }
}

export default Menubar
