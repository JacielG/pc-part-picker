import { Component, OnInit } from '@angular/core';
import { Components } from 'src/app/models/components';
import { Build } from 'src/app/models/build';
import { BuildsService } from 'src/app/services/builds.service';
import { ComponentsService } from 'src/app/services/components.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-build',
  templateUrl: './edit-build.component.html',
  styleUrls: ['./edit-build.component.css']
})
export class EditBuildComponent implements OnInit {
  components: Components[];
  build: Build;

  constructor(private _buildsService: BuildsService,
    private _componentsService: ComponentsService,
    private router: Router,
    private route: ActivatedRoute) {
    this.build = new Build();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this._componentsService.getComponents().subscribe(res => {
      this.components = res;
    });

    this._buildsService.getBuild(id).subscribe(res => {
      this.build = res;
    });
  }

  editBuild() {
    this._buildsService.editBuild(this.build).subscribe(() => {
      this.router.navigate(['/builds']);
    });
  }

  cancel() {
    this.router.navigate(['/builds']);
  }
}
