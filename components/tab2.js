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
export default function MarcosYLibrerias() {
  return (
    <List
      sx={{
        display: "grid",
        gap: 1,
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      {/* ITEM REACT */}
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }}>
            <JavascriptIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="ReactJs"
          secondary="Basico"
          sx={{ width: "25%" }}
        />
        <BarraBasico />
      </ListItem>
      {/* ITEM JQUERY */}
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }}>
            <JavascriptIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Jquery"
          secondary="Basico"
          sx={{ width: "25%" }}
        />
        <BarraBasico />
      </ListItem>
      {/* ITEM BOOTSTRAP  */}
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }}>
            <CssIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Bootstrap"
          secondary="Intermedio"
          sx={{ width: "25%" }}
        />
        <BarraIntermedio />
      </ListItem>
      {/* ITEM DJANGO  */}
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }}>
            <CodeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Django"
          secondary="Intermedio"
          sx={{ width: "25%" }}
        />
        <BarraIntermedio />
      </ListItem>
      {/* ITEM LARAVEL  */}
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }}>
            <CodeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Laravel"
          secondary="Basico"
          sx={{ width: "25%" }}
        />
        <BarraBasico />
      </ListItem>
      {/* ITEM NEXTJS  */}
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }}>
            <JavascriptIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Next.js"
          secondary="Basico"
          sx={{ width: "25%" }}
        />
        <BarraBasico />
      </ListItem>
      {/* ITEM VUE  */}
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }}>
            <JavascriptIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vue" secondary="Basico" sx={{ width: "25%" }} />
        <BarraBasico />
      </ListItem>
      {/* ITEM IONIC  */}
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }}>
            <CodeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Ionic" secondary="Basico" sx={{ width: "25%" }} />
        <BarraBasico />
      </ListItem>
    </List>
  );
}
