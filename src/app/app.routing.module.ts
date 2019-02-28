import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { Form2Component } from './form2/form2.component';

const paths : Routes = [{path : 'routing', component : Form2Component}];
@NgModule({
  imports: [
    RouterModule.forRoot(paths)
  ],
  declarations: [],
  exports : [RouterModule]
})
export class AppRoutingModule { }
