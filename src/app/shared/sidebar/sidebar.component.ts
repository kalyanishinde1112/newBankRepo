import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private _formBuilder = inject(FormBuilder);

  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

}
