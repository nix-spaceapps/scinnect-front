import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxInputTagComponent } from '@ngx-lite/input-tag';
import { Project } from 'src/model/scinnector';
import { AuthService } from 'src/services/auth.service';
import { ProjectService } from 'src/services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [ProjectService]
})
export class CreateComponent {

  @ViewChild(NgxInputTagComponent) tag?: ElementRef<NgxInputTagComponent>;

  get loading() {
    return this._projectService.loading;
  }

  project?: Project;

  formGroup: FormGroup = new FormGroup({
    uuid: new FormControl<string>(''),
    name: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
    image: new FormControl<string>(''),
    tags: new FormControl<string>(''),
  });

  constructor(private _projectService: ProjectService, private _router: Router, private _authService: AuthService) {}

  ngOnInit() {
    this.formGroup.valueChanges.subscribe(console.log)
  }

  ngAfterViewInit() {
  }

  create() { 
    if(this.formGroup.invalid) {
      return;
    }

    const project: Project = this.formGroup.value;
    project.tags = project.tags.join(",");

    this._projectService.create(project).subscribe(e => {
      this._router.navigateByUrl(`/user/${this._authService.session.value?.username}`)
    });
  }

}
