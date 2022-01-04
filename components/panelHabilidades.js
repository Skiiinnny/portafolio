import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import HabilidadesPrincipales from "../components/HabilidadesPrincipales";
import MarcosYLibrerias from "./frwkYLib";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Panel = () => (
  <div className="card my-4">
    <div className="card-header">
      <ul class="nav nav-tabs" id="panelHabilidades" role="tablist">

        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
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

        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
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

        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
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
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="principal"
        role="tabpanel"
        aria-labelledby="tab-principal"
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item sx={{width: "100%"}}>
            <HabilidadesPrincipales />
          </Item>
        
        </Stack>
      </div>
      <div
        class="tab-pane fade"
        id="secundarias"
        role="tabpanel"
        aria-labelledby="tab-secundarias"
      >
         <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item sx={{width: "100%"}}>
            <MarcosYLibrerias />
          </Item>
        
        </Stack>
      </div>
      <div
        class="tab-pane fade"
        id="otras"
        role="tabpanel"
        aria-labelledby="tab-otras"
      >
        Otras Caracteristicas
      </div>
    </div>
  </div>
);

export default Panel;
