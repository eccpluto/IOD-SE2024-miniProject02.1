import * as React from 'react';
import AppRoutes from './routes/AppRoutes';
import MyAppBar from './components/MyAppBar';
import { Toolbar } from '@mui/material';

export default function App() {
  return (
    <>
      <MyAppBar />
      {/* second Toolbar component so content not hidden behind NavBar 
          see https://mui.com/material-ui/react-app-bar/*/}
      <Toolbar />
      <AppRoutes></AppRoutes>
    </>
  );
}
