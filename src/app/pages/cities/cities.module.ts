import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { NgxEchartsModule } from 'ngx-echarts';

import { TablesModule } from '../tables/tables.module'
import { ThemeModule } from '../../@theme/theme.module';
import { CitiesComponent } from './cities.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    FormsModule,
    TablesModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    Ng2SmartTableModule
  ],
  declarations: [
    CitiesComponent  
  ],
})
export class CitiesModule { }
