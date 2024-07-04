import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dinosaur } from './dinosaur';
import { CreateOrUpdateDinosaur } from './create-or-update-dinosaur';

@Injectable({
  providedIn: 'root'
})
export class DinosaursService {

  private apiUrl = 'http://localhost:3000/dinosaurs';

  constructor(private http: HttpClient) { }

  getDinosaurs() {
    return this.http.get<Dinosaur[]>(this.apiUrl);
  }

  create(dinosaur: CreateOrUpdateDinosaur) {
    return this.http.post(this.apiUrl, dinosaur);
  }

  getById(id: string) {
    return this.http.get<Dinosaur>(`${this.apiUrl}/${id}`);
  }


  update(id: string, dinosaur: CreateOrUpdateDinosaur) {
    return this.http.patch(`${this.apiUrl}/${id}`, dinosaur);
  }

  delete(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
