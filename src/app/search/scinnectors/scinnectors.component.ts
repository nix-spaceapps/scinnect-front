import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { filter } from 'rxjs';
import { Project, Scinnector } from 'src/model/scinnector';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-scinnectors',
  templateUrl: './scinnectors.component.html',
  styleUrls: ['./scinnectors.component.scss'],
  providers: [UserService]
})
export class ScinnectorsComponent {

  @Input() control?: AbstractControl | null;
  scinnectors?: Array<Scinnector> = [];

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
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
