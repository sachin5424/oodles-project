import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

const material_ui = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule
]

@NgModule({
  imports: [
    material_ui
  ],
  exports:[
    material_ui
  ]
})
export class AngularMaterialModule { }
