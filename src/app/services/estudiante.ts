import { HttpClient } from '@angular/common/http';
import {inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Estudiante {
  
  constructor() {}
  private http = inject(HttpClient);
  private URLbase = environment.apiUrl + '/api/estudiantes';

  public getEstudiantes() {
    return this.http.get<any>(this.URLbase);
    // return this.http.get(this.URLbase);
  }
}
