'use client';
import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Navigator from './Navigator';
import Books from './Books/Books';
import Active from './Active/Active';
import History from './History/History';
import Charge from './Charge/Charge';
import Settings from './Settings/Settings'
import Header from './Header';
import BooksHeader from './Books/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ActiveHeader from "@/app/Active/Header";
import HistoryHeader from "@/app/History/Header";
import ChargeHeader from "@/app/Charge/Header";
import SettingsHeader from "@/app/Settings/Header";
import MainPage from "@/app/MainPage";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Bibliosfera
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}

// const { palette } = createTheme();
// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#272b82',
//         },
//         secondary: {
//             main: '#00aaea',
//         },
//         gray: {
//             main: '#fffffc',
//         },
//     },
// });

let theme = createTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
        },
    },
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiTab: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});

theme = {
    ...theme,
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#081627',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
                contained: {
                    boxShadow: 'none',
                    '&:active': {
                        boxShadow: 'none',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    marginLeft: theme.spacing(1),
                },
                indicator: {
                    height: 3,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    backgroundColor: theme.palette.common.white,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    margin: '0 16px',
                    minWidth: 0,
                    padding: 0,
                    [theme.breakpoints.up('md')]: {
                        padding: 0,
                        minWidth: 0,
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(1),
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    borderRadius: 4,
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgb(255,255,255,0.15)',
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: '#4fc3f7',
                    },
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontSize: 14,
                    fontWeight: theme.typography.fontWeightMedium,
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: 'inherit',
                    minWidth: 'auto',
                    marginRight: theme.spacing(2),
                    '& svg': {
                        fontSize: 20,
                    },
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    width: 32,
                    height: 32,
                },
            },
        },
    },
};

const drawerWidth = 256;

export default function Librarian() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Box sx={{display: 'flex', minHeight: '100vh'}}>
                    <CssBaseline/>
                    <Box
                        component="nav"
                        sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                    >
                        {isSmUp ? null : (
                            <Navigator
                                PaperProps={{style: {width: drawerWidth}}}
                                variant="temporary"
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                            />
                        )}
                        <Navigator
                            PaperProps={{style: {width: drawerWidth}}}
                            sx={{display: {sm: 'block', xs: 'none'}}}
                        />
                    </Box>
                    <Box sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                        <Routes>
                            <Route path="/books" element={<BooksHeader onDrawerToggle={handleDrawerToggle} />} />
                            <Route path="/active" element={<ActiveHeader onDrawerToggle={handleDrawerToggle} />} />
                            <Route path="/history" element={<HistoryHeader onDrawerToggle={handleDrawerToggle} />} />
                            <Route path="/charge" element={<ChargeHeader onDrawerToggle={handleDrawerToggle} />} />
                            <Route path="/settings" element={<SettingsHeader onDrawerToggle={handleDrawerToggle} />} />
                        </Routes>
                        {/*<Header onDrawerToggle={handleDrawerToggle}/>*/}
                        <Box component="main" sx={{flex: 1, py: 6, px: 4, bgcolor: '#eaeff1'}}>
                            <Routes>
                                <Route path="/" element={<MainPage />} />
                                <Route path="/books" element={<Books />} />
                                <Route path="/active" element={<Active />} />
                                <Route path="/history" element={<History />} />
                                <Route path="/charge" element={<Charge />} />
                                <Route path="/settings" element={<Settings />} />
                            </Routes>
                        </Box>
                        <Box component="footer" sx={{p: 2, bgcolor: '#eaeff1'}}>
                            <Copyright/>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </Router>
    );
}