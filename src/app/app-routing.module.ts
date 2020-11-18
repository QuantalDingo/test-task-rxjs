import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FifthTaskComponent } from './fifth-task/fifth-task.component';
import { FirstAndSecondTaskComponent } from './first-and-second-task/first-and-second-task.component';
import { FourthTaskComponent } from './fourth-task/fourth-task.component';
import { SixthTaskComponent } from './sixth-task/sixth-task.component';
import { ThirdTaskComponent } from './third-task/third-task.component';

const routes: Routes = [
  {
    path: 'first-and-second',
    component: FirstAndSecondTaskComponent,
  },
  {
    path: 'third',
    component: ThirdTaskComponent,
  },
  {
    path: 'fourth',
    component: FourthTaskComponent,
  },
  {
    path: 'fifth',
    component: FifthTaskComponent,
  },
  {
    path: 'sixth',
    component: SixthTaskComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
