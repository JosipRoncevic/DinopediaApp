import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dinosaur } from './dinosaur';
import { CreateOrUpdateDinosaur } from './create-or-update-dinosaur';

@Injectable({
  providedIn: 'root'
})
export class DinosaursService {

  private apiUrl = 'http://localhost:3000/dinosaurs';

  constructor(private http: HttpClient) { }

  getDinosaurs(): Observable<Dinosaur[]> {
    return this.http.get<Dinosaur[]>(this.apiUrl).pipe(
      map(dinosaurs => dinosaurs.map(dino => ({ ...dino, id: dino._id })))
    );
  }

  create(dinosaur: CreateOrUpdateDinosaur): Observable<Dinosaur> {
    return this.http.post<Dinosaur>(this.apiUrl, dinosaur);
  }

  getById(id: string): Observable<Dinosaur> {
    return this.http.get<Dinosaur>(`${this.apiUrl}/${id}`).pipe(
      map(dino => ({ ...dino, id: dino._id }))
    );
  }

  update(id: string, dinosaur: CreateOrUpdateDinosaur): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${id}`, dinosaur);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
