import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ gap: 2 }}>
            <Link href="populars" color="inherit" underline="none">สินค้ายอดอิต</Link>
            <Link href="stock" color="inherit" underline="none">สต๊อก</Link>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
