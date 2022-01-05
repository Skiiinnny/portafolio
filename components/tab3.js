import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
// Iconos
import AbcIcon from '@mui/icons-material/Abc';
import LaptopIcon from '@mui/icons-material/Laptop';
import GitHubIcon from '@mui/icons-material/GitHub';
// Componentes 
import BarraIntermedio from "./barraIntermedio";
import BarraBasico from "./barraBasico";
import { createTheme } from "@mui/material";
//Colores
import { blue } from "@mui/material/colors";
export default function OtrasHabilidades() {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });

  return (
    <List
    
      sx={{
        display: "grid",
        gap: 1,
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      {/* ITEM INGLES */}
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }}>
            <AbcIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Ingles"
          secondary="Intermedio"
          sx={{ width: "25%" }}
        />
        <BarraIntermedio />
      </ListItem>
      {/* ITEM OFFICE */}
      <ListItem>
        <ListItemAvatar >
          <Avatar sx={{ bgcolor: blue[500] }} >
            <LaptopIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Office"
          secondary="Intermedio"
          sx={{ width: "25%" }}
        />
        <BarraIntermedio />
      </ListItem>
     {/* ITEM GIT */}
       
       <ListItem>
        <ListItemAvatar >
          <Avatar sx={{ bgcolor: blue[500] }}>
            <GitHubIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Git"
          secondary="Intermedio"
          sx={{ width: "25%" }}
        />
        <BarraIntermedio />
      </ListItem>
    </List>
  );
}
