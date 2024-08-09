import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = 'http://localhost:3000/users';

    constructor(private http: HttpClient, private router: Router) { }

    signup(username: string, password: string) {
        return this.http.post(`${this.baseUrl}/signup`, { username, password })
            .subscribe(() => {
                this.router.navigate(['/login']);
            });
    }

    login(username: string, password: string) {
        return this.http.post(`${this.baseUrl}/login`, { username, password }, { withCredentials: true })
            .subscribe(() => {
                this.router.navigate(['/']);
            });
    }

    getCurrentUser() {
        return this.http.get(`${this.baseUrl}/current`, { withCredentials: true });
    }
}
