import {Routes} from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {OfficeComponent} from "./office/office.component";

export const routes: Routes = [
  {path: "users", component: UsersComponent,},
  {path: "office", component: OfficeComponent,}
];
