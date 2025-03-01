import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocietyService } from '../../services/society.service';

@Component({
  selector: 'app-society-form',
  templateUrl: './society-form.component.html',
  styleUrls: ['./society-form.component.scss']
})
export class SocietyFormComponent implements OnInit {
  societyForm!: FormGroup;

  constructor(private fb: FormBuilder, private _http: HttpClient, private _router: Router,private societyService:SocietyService) {}

  ngOnInit(): void {
    this.societyForm = this.fb.group({  
    branchNo: ['', [Validators.required]],
    name:['', [Validators.required]],
    registrationNo: ['', [Validators.required]],
    address:['', [Validators.required]],
    opBalDate:['', [Validators.required]],
    weeklyOff:['', [Validators.required]],
    status: 'Active',
    headOffice:'true'
    });
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.societyForm.patchValue({ logo: file.name }); // Store filename in form
    }
  }
    onSubmit(): void {
    if (this.societyForm.valid) {
      console.log(this.societyForm.value);
      this.societyService.addSociety(this.societyForm.value); // Save data in service

      this._router.navigate(['/society-list']);
    // this.societyForm.reset();    
    }
  }

   
}
