import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader } from "@mui/material";
import FormularioContacto from "./formularioContacto";
import { indigo } from "@mui/material/colors";
export default function InfoPersonal() {
  return (
    <Card sx={{ minWidth: 300 , bgcolor:indigo[50], fontFamily: 'Monospace'}}>
      <Typography fontSize={40} sx={{textAlign: 'center'}}>¿Te interesa saber quien soy?</Typography>
      <CardContent>
        <Typography fontSize={20} >
          Mi nombre es Nataniel Soto, oriundo de San Antonio, soy un desarrollador web y programador que nunca para de crecer, mi meta es clara, ser el mejor en lo que hago y a pesar de que aun me queda mucho camino por recorrer, se que lograre lo que me propongo.
        </Typography>
      </CardContent>

      <CardActions >
      <FormularioContacto/>
      </CardActions>
    </Card>
  );
}
