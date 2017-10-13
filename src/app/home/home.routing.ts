import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UserListComponent } from '../users/components/user-list/user-list.component';
import { UserAddComponent } from '../users/components/user-add/user-add.component';
import { UserUpdateComponent } from '../users/components/user-update/user-update.component';
import { HomeComponent} from './components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'user-list', component: UserListComponent },
            { path: 'user-add', component: UserAddComponent },
            { path: 'user-update/:id', component: UserUpdateComponent }
        ]
    }
];

export const HomeRoutes = RouterModule.forChild(routes);
