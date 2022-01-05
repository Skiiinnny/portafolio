import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
// Iconos
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
// Componentes 
import BarraIntermedio from "./barraIntermedio";
import BarraBasico from "./barraBasico";
// Colores 
import { blue } from "@mui/material/colors";

export default function HabilidadesPrincipales() {
  return (
    <List
      sx={{
        display: "grid",
        gap: 1,
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      {/* ITEM HTML */}
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }}>
            <HtmlIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="HTML5"
          secondary="Intermedio"
          sx={{ width: "25%" }}
        />
        <BarraIntermedio />
      </ListItem>
      {/* ITEM CSS */}
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }}>
            <CssIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="CSS3"
          secondary="Intermedio"
          sx={{ width: "25%" }}
        />
        <BarraIntermedio />
      </ListItem>
      {/* ITEM JAVASCRIPT  */}
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }}>
            <JavascriptIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Javascript"
          secondary="Basico"
          sx={{ width: "25%" }}
        />
        <BarraBasico />
      </ListItem>
      {/* ITEM PYTHON  */}
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }}>
            <CodeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Python"
          secondary="Intermedio"
          sx={{ width: "25%" }}
        />
        <BarraIntermedio />
      </ListItem>
      {/* ITEM MYSQL  */}
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }}>
            <StorageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="MySql"
          secondary="Basico"
          sx={{ width: "25%" }}
        />
        <BarraBasico />
      </ListItem>
      {/* ITEM PHP  */}
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }}>
            <CodeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Php"
          secondary="Basico"
          sx={{ width: "25%" }}
        />
        <BarraBasico />
      </ListItem>
    </List>
  );
}
