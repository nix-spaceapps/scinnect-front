import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { filter } from 'rxjs';
import { Scinnector } from 'src/model/scinnector';
import { UserService } from 'src/services/user.service';
import { faker } from '@faker-js/faker'

@Component({
  selector: 'app-scinnectors',
  templateUrl: './scinnectors.component.html',
  styleUrls: ['./scinnectors.component.scss'],
  providers: [UserService]
})
export class ScinnectorsComponent {

  jobs?: string[] = [];

  @Input() control?: AbstractControl | null;
  scinnectors?: Array<Scinnector> = [];

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.jobs  = Array(1000).map(e => e = faker.person.jobArea());
    console.log(this.jobs)
    this.control?.valueChanges.pipe(filter(e => this.filter(e))).subscribe((k) => this.find(k))
  }

  find(k: string) {
    this._userService.find(k).subscribe(e => {
      this.scinnectors = e.content;
    })
  }

  filter(e: any) {
    if(!e || e.length === 0) this.scinnectors = []

    return e && e.length > 3;
  }

}
