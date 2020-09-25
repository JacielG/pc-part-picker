import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Build } from '../models/build';


@Injectable({
  providedIn: 'root'
})
export class BuildsService {
  apiURL = 'https://localhost:44397/api/build';

  constructor(private http: HttpClient) { }

  getBuild(id: Number) {
    return this.http.get<Build>(this.apiURL + '/' + id);
  }

  getBuilds() {
    return this.http.get<Build[]>(this.apiURL);
  }

  createBuild(build: Build) {
    return this.http.post<Build>(this.apiURL, build);
  }

  editBuild(build: Build) {
    return this.http.put<Build>(this.apiURL + '/' + build.id, build);
  }

  deleteBuild(id: Number) {
    return this.http.delete(this.apiURL + '/' + id);
  }
}
