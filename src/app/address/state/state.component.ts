import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
export interface State {
  stateName: string;
}
export interface PeriodicElement {
  SrNo: number;
  Statename: string;  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {SrNo: 1, Statename: 'Maharashtra'},
  {SrNo: 2, Statename: 'Hydrabad'},  // Add more elements as needed
];

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrl: './state.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class StateComponent {
  
  stateName: string = '';

  displayedColumns: string[] = ['SrNo','Statename'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
