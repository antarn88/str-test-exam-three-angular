import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerEditorComponent } from './page/customer-editor/customer-editor.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'customer/0',
    component: CustomerEditorComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
