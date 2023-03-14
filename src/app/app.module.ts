import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ContactComponent } from './screens/contact/contact.component';
import { CvComponent } from './screens/cv/cv.component';
import { HomeComponent } from './screens/home/home.component';
import { ProjectsComponent } from './screens/projects/projects.component';
import { StageComponent } from './screens/stage/stage.component';
import { FooterComponent } from './footer/footer.component';
import { WhoIsJonasComponent } from './components/who-is-jonas/who-is-jonas.component';
import { AnimationComponent } from './components/animation/animation.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ContactInfoListItemComponent } from './components/contact-info-list-item/contact-info-list-item.component';
import { TitleComponent } from './components/title/title.component';
import { HomeTitleComponent } from './components/home-title/home-title.component';
import { StatsComponent } from './components/stats/stats.component';
import { StatComponent } from './components/stat/stat.component';
import { FamilyComponent } from './components/family/family.component';
import { FullCvComponent } from './components/full-cv/full-cv.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { CvInfoComponent } from './components/cv/cv-info/cv-info.component';
import { CvLanguagesComponent } from './components/cv/cv-languages/cv-languages.component';
import { CvLanguageComponent } from './components/cv/cv-language/cv-language.component';
import { CvAboutMeComponent } from './components/cv/cv-about-me/cv-about-me.component';
import { CvStudiesComponent } from './components/cv/cv-studies/cv-studies.component';
import { CvExperiencesComponent } from './components/cv/cv-experiences/cv-experiences.component';
import { CvKnowledgeComponent } from './components/cv/cv-knowledge/cv-knowledge.component';
import { CvKnowledgesComponent } from './components/cv/cv-knowledges/cv-knowledges.component';
import { MapComponent } from './components/contact/map/map.component';
import { EmailFormComponent } from './components/contact/email-form/email-form.component';
import { TimelineComponent } from './components/timeline/timeline/timeline.component';
import { TimelineItemComponent } from './components/timeline/timeline-item/timeline-item.component';
import { ProjectsOverviewComponent } from './components/projects/projects-overview/projects-overview.component';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContactComponent,
    CvComponent,
    HomeComponent,
    ProjectsComponent,
    StageComponent,
    FooterComponent,
    WhoIsJonasComponent,
    AnimationComponent,
    ContactInfoComponent,
    ContactInfoListItemComponent,
    TitleComponent,
    HomeTitleComponent,
    StatsComponent,
    StatComponent,
    FamilyComponent,
    FullCvComponent,
    ErrorMessageComponent,
    CvInfoComponent,
    CvLanguagesComponent,
    CvLanguageComponent,
    CvAboutMeComponent,
    CvStudiesComponent,
    CvExperiencesComponent,
    CvKnowledgeComponent,
    CvKnowledgesComponent,
    MapComponent,
    EmailFormComponent,
    TimelineComponent,
    TimelineItemComponent,
    ProjectsOverviewComponent,
    ProjectDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
