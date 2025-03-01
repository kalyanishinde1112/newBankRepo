import { Component } from '@angular/core';
import { SocietyService } from '../../services/society.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrl: './branch-form.component.scss'
})
export class BranchFormComponent {
  societies: any[] = [];
  filteredSocieties: any[] = [];
  searchQuery: string = '';
  isFormVisible: boolean = false;
  isEditMode: boolean = false;
  currentSocietyId: number | null = null;
  dataForm: FormGroup;
  currentPage: number = 1;
  pageSize: number = 5;

  constructor(private societyService: SocietyService, private fb: FormBuilder) {
    this.dataForm = this.fb.group({
      name: ['', Validators.required],
      branchNo: ['', Validators.required],
      registrationNo: ['', Validators.required],
      address: ['', Validators.required],
      opBalDate: ['', Validators.required],
      weeklyOff: ['', Validators.required],
      cashLimit: ['', Validators.required],
      status: ['Active'],
      headOffice:[true]
    });
  }

  ngOnInit() {
    this.fetchSocieties();
  }

  // Fetch societies from API
  fetchSocieties() {
    const localData = localStorage.getItem('societies');
    if (localData) {
      this.societies = JSON.parse(localData);
      this.filteredSocieties = [...this.societies];
    } else {
      this.societyService.getData().subscribe((data: any) => {
        this.societies = data;
        this.filteredSocieties = [...data];
        this.saveToLocalStorage();
      });
    }
  }
  

  // Filter data for search
  applyFilter() {
    this.filteredSocieties = this.societies.filter(society =>
      society.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Show/hide form
  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
    if (!this.isFormVisible) {
      this.isEditMode = false;
      this.dataForm.reset();
      this.currentSocietyId = null;
    }
  }

  // Submit form (Add or Edit)
  onSubmit() {
    if (this.isEditMode && this.currentSocietyId !== null) {
      this.societyService.updateRecord(this.currentSocietyId, this.dataForm.value).subscribe(() => {
        const index = this.societies.findIndex(s => s.id === this.currentSocietyId);
        if (index !== -1) {
          this.societies[index] = { ...this.dataForm.value, id: this.currentSocietyId };
          this.saveToLocalStorage(); // Save locally
        }
        this.fetchSocieties();
        this.toggleForm();
      });
    } else {
      this.societyService.postData(this.dataForm.value).subscribe((newSociety) => {
        this.societies.push(newSociety);
        this.saveToLocalStorage(); // Save locally
        this.fetchSocieties();
        this.toggleForm();
      });
    }
  }
  
  // Edit a society record
  editRecord(id: number) {
    this.societyService.getBatchByID(id).subscribe((data: any) => {
      this.dataForm.patchValue(data);
      this.isEditMode = true;
      this.currentSocietyId = id;
      this.isFormVisible = true;
    });
  }

  // Delete a society record
  deleteRecord(id: number) {
    if (confirm('Are you sure you want to delete this society?')) {
      this.societyService.deleteBatch(id).subscribe(() => {
        this.societies = this.societies.filter(s => s.id !== id);
        this.saveToLocalStorage(); // Save locally after deletion
        this.fetchSocieties();
      });
    }
  }
  saveToLocalStorage() {
    localStorage.setItem('societies', JSON.stringify(this.societies));
  }
    

  // Pagination Helpers
  get paginatedSocieties() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredSocieties.slice(startIndex, startIndex + this.pageSize);
  }

  nextPage() {
    if (this.currentPage * this.pageSize < this.filteredSocieties.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
