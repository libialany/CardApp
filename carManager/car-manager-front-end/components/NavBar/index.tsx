import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useRouter } from "next/router";
import { Button } from '@mui/material';
export default function ButtonAppBar() {
  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">  
        <Toolbar>
          <Button color="inherit" onClick={()=>console.log('works')}>Add Card</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}