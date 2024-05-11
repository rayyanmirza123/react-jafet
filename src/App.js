import TopBar from "./components/TopBar";
import { colorModeContext, useMode } from "./themes/theme";
import { useState } from "react";
import {Routes, Route} from 'react-router-dom';
import { CssBaseline, ThemeProvider } from "@mui/material";
import ProSideBar from "./components/SideBar";
import Dashboard from "./screens/dashboard/Dashboard";
import AddStudent from "./screens/students/AddStudent";
import AddTeacher from "./screens/teachers/AddTeacher";
import AddUserFacialData from "./screens/facial_recognition/AddUserFacialData";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <div className="app">
            <ProSideBar isSidebar={isSidebar}/>
            <main className="content">
              <TopBar/>
              <Routes>
                <Route path="/"  element={<Dashboard/>}/>
                <Route path="/add_user" element={<AddStudent/>}/>
                <Route path="/addfrdata" element={<AddUserFacialData/>}/>
                <Route path="/add_teacher" element={<AddTeacher/>}/>
              </Routes>
            </main>
          </div>
    </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
