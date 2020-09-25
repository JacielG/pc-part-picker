import { Component, OnInit } from '@angular/core';
import { Build } from 'src/app/models/build';
import { BuildsService } from 'src/app/services/builds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.css']
})
export class BuildsComponent implements OnInit {
  builds: Build[];

  constructor(private _buildsService: BuildsService, private router: Router) { }

  ngOnInit(): void {
    this.getBuilds();
  }

  createBuild() {
    this.router.navigate(['/builds/create']);
  }

  editBuild(id: Number) {
    this.router.navigate(['/builds/edit', id]);
  }

  getBuilds() {
    this._buildsService.getBuilds().subscribe(data => {
      this.builds = data;
    });
  }

  deleteBuild(id: Number) {
    const res = confirm("Are you sure you want to delete this build?");
    if (res) {
      this._buildsService.deleteBuild(id).subscribe(() => {
        this.getBuilds();
      })
    }
  }
}
