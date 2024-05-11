import { useState } from "react";
import {Sidebar, Menu, MenuItem, sidebarClasses, SubMenu} from 'react-pro-sidebar';
import {Box, Divider, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import { tokens } from "../themes/theme";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SchoolIcon from '@mui/icons-material/School';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Person4Icon from '@mui/icons-material/Person4';
import HandymanIcon from '@mui/icons-material/Handyman';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
      rootStyles={{
        ".&:hover":{
          background: `${colors.greenAccent[800]} !!!important`
        },
      }}
    >
      {title}
    </MenuItem>
  );
};

const ProSideBar = () => {
  const theme = useTheme();
  const colors=  tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box sx={{ height:'100% !important' }}>
      <Sidebar collapsed={isCollapsed}
        rootStyles={{
          [`.${sidebarClasses.container}`]:{
            background: `${colors.primary[400]} !important`,
          },
        }}
        style={{ height: "100vh" }}
      >
        <Menu iconShape="square">
          <MenuItem
            onClick={ () => setIsCollapsed(!isCollapsed) }
            icon={isCollapsed ? <MenuOutlinedIcon/>: undefined}
            style={{
              margin: "10px 0 20px 0",
              color:  colors.grey[100],
            }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                  >
                    <Typography variant="h5" color={colors.grey[100]} onClick={() => setIsCollapsed(!isCollapsed)}>
                      ADMIN
                    </Typography>
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                      <MenuOutlinedIcon/>
                    </IconButton>
                  </Box>
              )}
            </MenuItem>
            {!isCollapsed && (
              <Box mb="25px">
                <Box display="flex"  justifyContent="center" alignItems="center">
                  <img
                      alt="profile-user"
                      width="100px"
                      height="100px"
                      src={`../../assets/user.png`}
                      style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                </Box>
                <Box textAlign="center">
                  <Typography variant="h6" color={colors.grey[100]}  fontWeight='bold' sx={{m: "10px 0 0 0"}}>
                    John Doe
                  </Typography>
                </Box>
              </Box>
            )}
            <Divider/>
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                  title="Dashboard"
                  to="/"
                  icon={<HomeIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Divider/>
                <SubMenu
                  label="Users"
                  icon={<PeopleIcon/>}
                  selected={selected}
                  setSelected={setSelected}
                >
                  <Item
                  title="Add User"
                  to="/add_user"
                  icon={<Person4Icon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Update User"
                  to="/update_user"
                  icon={<Person4Icon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Remove User"
                  to="/remove_user"
                  icon={<Person4Icon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                </SubMenu>
                <Divider/>
                <SubMenu
                  label='Facial Recognition'
                  icon={<InsertEmoticonIcon/>}
                  selected={selected}
                  setSelected={setSelected}
                >
                  <Item
                    title='Add Facial Data'
                    to='/addfrdata'
                    icon={<FaceRetouchingNaturalIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                </SubMenu>
                <Divider/>                
                <SubMenu
                  label='Teachers/Admins'
                  icon={<AdminPanelSettingsIcon/>}
                  selected={selected}
                  setSelected={setSelected}
                >
                  <Item
                    title='Add Teacher'
                    to='/add_teacher'
                    icon={<HistoryEduIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                </SubMenu>
                <Divider/>
                <Item
                  title='Classes'
                  to='/classes'
                  icon={<SchoolIcon/>}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Divider/>
                <Item
                  title='Time-Tables'
                  to='/timetables'
                  icon={<ScheduleIcon/>}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Divider/>
                <Item
                  title='Reports'
                  to='/reports'
                  icon={<AssessmentIcon/>}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Divider/>
                <Item
                  title='Tools'
                  to='/tools'
                  icon={<HandymanIcon/>}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Divider/>
            </Box>
        </Menu>
      </Sidebar>
    </Box>
  );

};

export default ProSideBar;
