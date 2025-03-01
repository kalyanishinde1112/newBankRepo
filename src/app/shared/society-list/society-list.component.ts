import { Component } from '@angular/core';
import { SocietyService } from '../../services/society.service';

@Component({
  selector: 'app-society-list',
  templateUrl: './society-list.component.html',
  styleUrl: './society-list.component.scss'
})
export class SocietyListComponent {
  societies: any[] = [];
  filteredSocieties: any[] = [];
  searchText: string = '';
  page: number = 1;
  selectedStatus: string = ''; // Selected Status (Saved/Closed)

  constructor(private societyService: SocietyService) {}

  ngOnInit() {
    this.societies = this.societyService.getSocieties();
    this.societies = this.societyService.getSocieties();
    this.filteredSocieties = [...this.societies]; // Initialize filtered list
  }
  filterBranches() {
    this.filteredSocieties = this.societies.filter(user => {
      const matchesStatus = this.selectedStatus ? user.status === this.selectedStatus : true;
      const matchesSearch = this.searchText
        ? Object.values(user).some(value =>
            String(value).toLowerCase().includes(this.searchText.toLowerCase())
          )
        : true;
      return matchesStatus && matchesSearch;
    });

    this.page = 1; // Reset pagination to first page
  }
}
