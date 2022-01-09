import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import HabilidadesPrincipales from "./tab1";
import MarcosYLibrerias from "./tab2";
import OtrasHabilidades from "./tab3";
import { indigo } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.info.main,
}));

const Panel = () => (
  <div className="card my-4  tabla-1">
    <div className="card-header ">
      <ul className="nav nav-tabs " id="panelHabilidades" role="tablist">

        <li  className="nav-item " role="presentation">
          <button
            
            className="nav-link text-info"
            id="tab-principal"
            data-bs-toggle="tab"
            data-bs-target="#principal"
            type="button"
            role="tab"
            aria-controls="principal"
            aria-selected="true"
          >
            Lenguajes
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link text-info"
            id="tab-secundarias"
            data-bs-toggle="tab"
            data-bs-target="#secundarias"
            type="button"
            role="tab"
            aria-controls="secundarias"
            aria-selected="false"
          >
            Marcos de trabajo y Librerias
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link text-info"
            id="tab-otras"
            data-bs-toggle="tab"
            data-bs-target="#otras"
            type="button"
            role="tab"
            aria-controls="otras"
            aria-selected="false"
          >
            Otras Caracteristicas
          </button>
        </li>
      </ul>
    </div>
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id="principal"
        role="tabpanel"
        aria-labelledby="tab-principal"
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item sx={{width: "100%", bgcolor:indigo[50]}}>
            <HabilidadesPrincipales  />
          </Item>
        
        </Stack>
      </div>
      <div
        className="tab-pane fade"
        id="secundarias"
        role="tabpanel"
        aria-labelledby="tab-secundarias"
      >
         <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item sx={{width: "100%", bgcolor:indigo[50]}}>
            <MarcosYLibrerias />
          </Item>
        
        </Stack>
      </div>
      <div
        className="tab-pane fade"
        id="otras"
        role="tabpanel"
        aria-labelledby="tab-otras"
      >
         <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item sx={{width: "100%", bgcolor:indigo[50]}}>
            <OtrasHabilidades />
          </Item>
        
        </Stack>
      </div>
    </div>
  </div>
);

export default Panel;
