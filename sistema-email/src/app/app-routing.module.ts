import { EmailReadComponent } from './components/email/email-read/email-read.component';
import { EmailCrudComponent } from './views/email-crud/email-crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailUpdateComponent } from './components/email/email-update/email-update.component';
import { EmailCreateComponent } from './components/email/email-create/email-create.component';


const routes: Routes = [
  {
    path: "",
    component: EmailCrudComponent
  },
  {
    path: "email/email-read",
    component: EmailReadComponent
  },
  {
    path: "email/email-create",
    component: EmailCreateComponent
  },
  {
    path: "email/email-update/:id",
    component: EmailUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
