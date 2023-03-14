import { Component, Input } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {
  @Input() project!: Project; 
}
