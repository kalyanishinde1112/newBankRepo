import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocietyService {
  url="http://localhost:5000/societies";
  private societies: any[] = [];

  constructor(private http: HttpClient) {
    this.loadData();
    const storedSocieties = localStorage.getItem('societies');
    if (storedSocieties) {
      this.societies = JSON.parse(storedSocieties);
    }
  }    // Load data from local storage on service initialization
    

  
 

  // Load societies from local storage
  private loadData() {
    const storedSocieties = localStorage.getItem('societies');
    if (storedSocieties) {
      this.societies = JSON.parse(storedSocieties);
    }
  }

  // Save societies to local storage
  private saveData() {
    localStorage.setItem('societies', JSON.stringify(this.societies));
  }

 // Fetch all societies from API and store in local storage
getData(): Observable<any> {
  return this.http.get(this.url).pipe(
    tap((data: any) => {
      if (data && Array.isArray(data)) {
        this.societies = data;
        this.saveData(); // Save API data to local storage
      } else {
        console.error('Invalid data format received from API');
      }
    }),
    // If API fails, use local storage data as a fallback
    tap({
      error: () => {
        const storedSocieties = localStorage.getItem('societies');
        if (storedSocieties) {
          this.societies = JSON.parse(storedSocieties);
        }
      }
    })
  );
}

// Add a new society and store it locally
postData(data: any): Observable<any> {
  return this.http.post(this.url, data).pipe(
    tap((response: any) => {
      if (response && response.id) { // Ensure valid response
        this.societies.push(response);
        this.saveData(); // Save locally
      } else {
        console.error('Invalid response from API when adding society');
      }
    }),
    tap({
      error: () => {
        this.societies.push(data); // Add to local state even if API fails
        this.saveData();
      }
    })
  );
}

// Delete a society and update local storage
deleteBatch(id: number): Observable<any> {
  return this.http.delete(`${this.url}/${id}`).pipe(
    tap(() => {
      this.societies = this.societies.filter(society => society.id !== id);
      this.saveData(); // Update local storage
    }),
    tap({
      error: () => {
        console.error(`Failed to delete society with ID ${id}`);
      }
    })
  );
}

// Update a society and store the updated data locally
updateRecord(id: number, data: any): Observable<any> {
  return this.http.put(`${this.url}/${id}`, data).pipe(
    tap((updatedSociety: any) => {
      if (updatedSociety && updatedSociety.id) { // Ensure valid response
        const index = this.societies.findIndex(society => society.id === id);
        if (index !== -1) {
          this.societies[index] = updatedSociety;
          this.saveData(); // Update local storage
        }
      } else {
        console.error('Invalid response from API when updating society');
      }
    }),
    tap({
      error: () => {
        const index = this.societies.findIndex(society => society.id === id);
        if (index !== -1) {
          this.societies[index] = { ...data, id }; // Store the changes locally if API fails
          this.saveData();
        }
      }
    })
  );
}

// Get a single society by ID
getBatchByID(id: number): Observable<any> {
  return this.http.get(`${this.url}/${id}`);
}
  

  addSociety(society: any) {
    this.societies.push(society);
    localStorage.setItem('societies', JSON.stringify(this.societies)); // Save to local storage
  }

  getSocieties() {
    return this.societies;
  }
}
