import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './screens/contact/contact.component';
import { CvComponent } from './screens/cv/cv.component';
import { HomeComponent } from './screens/home/home.component';
import { ProjectsComponent } from './screens/projects/projects.component';
import { StageComponent } from './screens/stage/stage.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cv', component: CvComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'stage', component: StageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
