import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';
import { StateComponent } from './state/state.component';
import { DistrictComponent } from './district/district.component';
import { TalukaComponent } from './taluka/taluka.component';
import { CityComponent } from './city/city.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    AddressComponent,
    StateComponent,
    DistrictComponent,
    TalukaComponent,
    CityComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    MaterialModule
    
  ]
})
export class AddressModule { }
