import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import routes from './routes'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { navigate } from "@reach/router"

const useStyles = makeStyles({
    list: {
        width: 'auto',
    },
    paper: {
        width: '12em',
        background: '#61dafb'
    }
});

export default ({ open }) => {
    const {list, paper} = useStyles();
    // Use local state to check if the nav is open
    const [state, setState] = useState({
        open
    });

    /**
     * function to toggle the nav bar open and closed
     * @param {boolean} openState 
     */
    const toggleNav = (openState) => () => setState({open: openState});

    /**
     * function to naviage to a new route
     * @param {string} desitnation
     */
    const navigateTo = (desitnation) => () => navigate(desitnation)

    return (
        <Drawer open={state.open} onClose={toggleNav(false)} classes={{paper}} variant="persistent">
            <div
              className={list}
              role="presentation"
            >
                <List>
                    {
                        routes.map(({text, link, icon: Icon}) => (
                            <ListItem button key={text} onClick={navigateTo(link)}>
                                <ListItemText primary={text} />
                                <ListItemIcon><Icon /></ListItemIcon>
                            </ListItem>
                        ))
                    }
                </List>
            </div>
        </Drawer>
    )
}