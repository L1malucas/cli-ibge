import { ApiModule } from '../types/api';

import { aglomeracoesUrbanasModule } from './aglomeracoes-urbanas';
import { distritosModule } from './distritos';
import { mesorregioesModule } from './mesorregioes';
import { microrregioesModule } from './microrregioes';
import { municipiosModule } from './municipios';
import { paisesModule } from './paises';
import { regioesModule } from './regioes';
import { regioesImediatasModule } from './regioes-imediatas';
import { regioesIntegradasModule } from './regioes-integradas';
import { regioesIntermediariasModule } from './regioes-intermediarias';
import { regioesMetropolitanasModule } from './regioes-metropolitanas';
import { subdistritosModule } from './subdistritos';
import { ufsModule } from './ufs';


// Este array centraliza todos os módulos da aplicação.
export const allModules: ApiModule[] = [
  ufsModule,
  municipiosModule,
  distritosModule,
  subdistritosModule,
  regioesModule,
  regioesImediatasModule,
  regioesIntermediariasModule,
  regioesMetropolitanasModule,
  paisesModule,
  mesorregioesModule,
  microrregioesModule,
  aglomeracoesUrbanasModule,
  regioesIntegradasModule,
].sort((a, b) => a.name.localeCompare(b.name)); // Ordena os módulos alfabeticamente para exibição no menu
