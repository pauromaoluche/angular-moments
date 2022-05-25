import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MomentsComponent } from './components/pages/moments/moments.component';
import { MomentComponent } from './components/pages/moment/moment.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'moments', component: MomentsComponent,
    children: [
      {
        path: 'new', component: NewMomentComponent
      },
      // {
      //   path: 'edit/:id', Component: EditMomentComponent
      // }
    ],
  },
  {
    path: 'moment/edit/:id', component: EditMomentComponent
  },
  {
    path: 'moment/:id', component: MomentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
