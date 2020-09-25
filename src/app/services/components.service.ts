import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Components } from '../models/components';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  apiURL = 'https://localhost:44397/api/component';

  constructor(private http: HttpClient) { }

  getComponents() {
    return this.http.get<Components[]>(this.apiURL);
  }
}
