import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address.component';
import { StateComponent } from './state/state.component';
import { DistrictComponent } from './district/district.component';
import { TalukaComponent } from './taluka/taluka.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [{ path: 'state', component: StateComponent },
  {path:'district',component:DistrictComponent},
  {path:'taluka',component:TalukaComponent},
  {path:'city',component:CityComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressRoutingModule { }
