import { Component, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {

    public users: User[] = [];

    constructor( private router: Router,
                private translate: TranslateService,
                private userService: UserService ) { }

    ngOnInit() {
      this.loadList();
    }

    loadList() {
      const getAll$ = this.userService.getall()
      .subscribe(
        response => {
            this.users = JSON.parse(JSON.stringify(response));
            getAll$.unsubscribe();
        },
        error => {
            getAll$.unsubscribe();
        });
    }

    update(user: any) {
      this.router.navigate(['home/user-update', user.id ]);
    }

    remove(user: any) {
      const remove$ = this.userService.remove(user.id)
      .subscribe(
        response => {
            this.users = JSON.parse(JSON.stringify(response));
            this.loadList();
            remove$.unsubscribe();
        },
        error => {
            remove$.unsubscribe();
        });
    }
}
