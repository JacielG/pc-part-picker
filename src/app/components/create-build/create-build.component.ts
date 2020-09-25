import { Component, OnInit } from '@angular/core';
import { BuildsService } from 'src/app/services/builds.service';
import { ComponentsService } from 'src/app/services/components.service';
import { Router } from '@angular/router';
import { Build } from 'src/app/models/build';
import { Components } from 'src/app/models/components';

@Component({
  selector: 'app-create-build',
  templateUrl: './create-build.component.html',
  styleUrls: ['./create-build.component.css']
})
export class CreateBuildComponent implements OnInit {
  components: Components[];
  build: Build;

  constructor(private _buildsService: BuildsService,
    private _componentsService: ComponentsService,
    private router: Router) {
    this.build = new Build();
  }

  ngOnInit(): void {
    this._componentsService.getComponents().subscribe(res => {
      this.components = res;
    });
  }

  createBuild() {
    if (this.build) {
      this._buildsService.createBuild(this.build).subscribe(() => {
        this.router.navigate(['/builds']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/builds']);
  }

}
