import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../model/user';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserUpdateComponent implements OnInit {
  public formUserUpdate: FormGroup;
  public userId: number;
  public user: User[] = [];
  public userUpdate: User;
  public obj: any;
  public success: boolean;
  @ViewChild('name') name: ElementRef;
  @ViewChild('birthdate') birthdate: ElementRef;

  constructor( private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private userService: UserService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // tslint:disable-next-line:radix
      this.userId = parseInt(params['id']);
    });
    this.getUser(this.userId);
    this.buildForm();
  }

  buildForm() {
    this.formUserUpdate = this.formBuilder.group({
      name : [null, Validators.required],
      birthdate : [null, Validators.required]
    });
  }

  getUser(id: number) {
    const getUser$ = this.userService.get(id)
    .subscribe(
      response => {
          this.obj = response;
          this.user = JSON.parse(JSON.stringify(this.obj));
          this.name.nativeElement.value = this.obj.name;
          this.birthdate.nativeElement.value = this.obj.birthdate.substring(0, 10);
          getUser$.unsubscribe();
      },
      error => {
          getUser$.unsubscribe();
      });
  }

  update(userUpdate: User) {
    const update$ = this.userService.update(userUpdate)
    .subscribe(
      response => {
          this.router.navigate(['home/user-list']);
          update$.unsubscribe();
      },
      error => {
          update$.unsubscribe();
      });
  }
  onSubmit() {
    this.userUpdate = new User();
    this.userUpdate.Id = this.userId;
    this.userUpdate.Name = this.formUserUpdate.controls['name'].value;
    this.userUpdate.Birthdate = this.formUserUpdate.controls['birthdate'].value;
    const update$ = this.userService.update(this.userUpdate)
      .subscribe(
        data => {
            this.success = true;
            this.name.nativeElement.value = '';
            this.birthdate.nativeElement.value = '';
            update$.unsubscribe();
        },
        error => {
            this.success = false;
            update$.unsubscribe();
        });
  }

}
