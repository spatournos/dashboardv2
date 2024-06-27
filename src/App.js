import { Routes, Route, Navigate } from "react-router-dom";

import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

import Home from "./components/Home";
import NotFound from './components/NotFound';

import TopBar from './scenes/global/TopBar'
import SideBar from './scenes/global/SideBar'
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Calendar from "./scenes/calendar";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode} >
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <SideBar />
        <main className='content'>
          <TopBar />
          <Routes>
              {/* root folder for app */}
              <Route path="/" element={<Home />} />
              {/* root folder for github pages */}
              <Route path="/dashboardv2" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
        </main> 
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider> 
    
  );
}

export default App;
