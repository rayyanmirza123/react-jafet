import {Box, IconButton, Input, useTheme} from '@mui/material';
import { useContext } from 'react';
import { colorModeContext,tokens } from '../themes/theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';


const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(colorModeContext);

  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      <Box display='flex' backgroundColor={colors.primary[400]} borderRadius='3px'>
        <InputBase sx={{ml: 2, flex:  1}} placeholder="Search"/>
        <IconButton type='button' sx={{p: 1}}>
          <SearchIcon/>
        </IconButton>
      </Box>

      <Box display='flex'>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'light' ? (
            <DarkModeOutlinedIcon/>
          ):(
            <LightModeOutlinedIcon/>
          )
        }
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon/>
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon/>
        </IconButton>
      </Box>
    </Box>
  );

}

export default TopBar;