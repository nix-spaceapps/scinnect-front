import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { filter, tap } from 'rxjs';
import { Project } from 'src/model/scinnector';
import { ProjectService } from 'src/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectService]
})
export class ProjectsComponent {

  @Input() control?: AbstractControl | null;
  projects?: Array<Project> = [];

  percent: number = (() => Math.floor(Math.random() * 101))();

  constructor(
    private _projectService: ProjectService
  ) { }

  ngOnInit() {
    this.control?.valueChanges.pipe(filter(e => this.filter(e))).subscribe((k) => this.find(k))
  }

  find(k: string) {
    this._projectService.find(k).subscribe(e => {
      this.projects = e.content;
    })
  }

  filter(e: any) {
    if(!e || e.length === 0) this.projects = []

    return e && e.length > 3;
  }


}
