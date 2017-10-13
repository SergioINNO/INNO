
import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserAddComponent implements OnInit {
  public formUserAdd: FormGroup;
  public user: User;
  public success: boolean;
  @ViewChild('name') name: ElementRef;
  @ViewChild('birthdate') birthdate: ElementRef;

  // Mensajes de error
  campoObligatorio = 'Campo Obligatorio';

  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.success = false;
    this.buildForm();
  }

  // Validación de formulario de forma reactiva
  buildForm() {
    this.formUserAdd = this.formBuilder.group({
      name : [null, Validators.required],
      birthdate : [null, Validators.required]
    });
  }

  onSubmit() {
    this.user = new User();
    this.user.Name = this.formUserAdd.controls['name'].value;
    this.user.Birthdate = this.formUserAdd.controls['birthdate'].value;
    const create$ = this.userService.create(this.user)
      .subscribe(
        data => {
            this.success = true;
            this.name.nativeElement.value = '';
            this.birthdate.nativeElement.value = '';
            create$.unsubscribe();
        },
        error => {
            this.success = false;
            create$.unsubscribe();
        });
  }
}
