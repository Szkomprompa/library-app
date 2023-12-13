import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import {Alert, Box, Button, Collapse, Fade, Popper} from "@mui/material";
import Paper from "@mui/material/Paper";


const lightColor = 'rgba(255, 255, 255, 0.7)';

interface HeaderProps {
    onDrawerToggle: () => void;
}

export default function BooksHeader(props: HeaderProps) {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [openAlert, setOpenAlert] = React.useState(true);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'spring-popper' : undefined;

    const { onDrawerToggle } = props;

    return (
        <React.Fragment>
            <AppBar color="primary" position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={onDrawerToggle}
                                edge="start"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs />
                        <Grid item>
                            <Tooltip title="Powiadomienia">
                                <IconButton color="inherit" onClick={handleClick}>
                                    <NotificationsIcon />
                                </IconButton>
                            </Tooltip>
                            <Popper id={id} open={open} anchorEl={anchorEl} transition sx={{p: 2}}>
                                {({ TransitionProps }) => (
                                    <Fade {...TransitionProps}>
                                        {/*<Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>*/}
                                        {/*    The content of the Popper.*/}
                                        {/*</Box>*/}
                                        <Paper sx={{ p: 1, margin: 'auto', width: 600}}>
                                            <AppBar
                                                position="static"
                                                color="transparent"
                                                elevation={0}
                                                sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
                                            >
                                                <Typography sx={{ my: 1, mx: 2, fontWeight: 'bold' }} color="text.secondary" align="center">
                                                    Powiadomienia
                                                </Typography>
                                            </AppBar>
                                            {/*<Collapse in={open && openAlert}>*/}
                                            {/*    <Alert sx={{my: 1}} severity="warning" onClose={() => {setOpenAlert(false);}}>*/}
                                            {/*        Dobiega termin zakończenia twojego wypożyczenia!*/}
                                            {/*    </Alert>*/}
                                            {/*</Collapse>*/}
                                            <Typography sx={{ my: 2, mx: 2 }} color="text.secondary" align="center">
                                                Brak powiadomień.
                                            </Typography>
                                        </Paper>
                                    </Fade>
                                )}
                            </Popper>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar
                component="div"
                color="primary"
                position="static"
                elevation={0}
                sx={{ zIndex: 0 }}
            >
                <Toolbar>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs>
                            <Typography color="inherit" variant="h5" component="h1">
                                Książki
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Tooltip title="Pomoc">
                                <IconButton color="inherit">
                                    <HelpIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}