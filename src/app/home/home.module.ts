import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { HomeRoutes } from './home.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UserListComponent } from '../users/components/user-list/user-list.component';
import { UserAddComponent } from '../users/components/user-add/user-add.component';
import { UserUpdateComponent } from '../users/components/user-update/user-update.component';
import { UserService } from '../users/services/user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    LanguagesComponent,
    UserListComponent, UserAddComponent, UserUpdateComponent
  ],
  providers: [ UserService ]
})
export class HomeModule { }
