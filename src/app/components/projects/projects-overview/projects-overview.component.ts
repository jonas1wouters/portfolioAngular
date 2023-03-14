import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.scss']
})
export class ProjectsOverviewComponent implements OnInit {
  ngOnInit(): void {
    this.showProjectF();
  }

  showWork = true;
  showEducation = true;
  showPersonal = true;

  showArray: Array<String> = ["personal", "work", "education"];

  projectIndex: number = 1;

  projects: Array<Project> = [
    {imageURL: "../../../../assets/projects/google.svg", title: "Personal 1", time: "My life", type:"personal", shortDescription:"Ik heb google gemaakt", description: "Ik ben 25 jaar van mijn leven bezig geweest met het ontwikkelen van google."},
    {imageURL: "../../../../assets/projects/placeholder2.jpg", title: "Personal 2", time: "My life", type:"personal", shortDescription:"Ik heb google gemaakt", description: "Ik ben 25 jaar van mijn leven bezig geweest met het ontwikkelen van google."},
    {imageURL: "../../../../assets/projects/google.svg", title: "Work 1", time: "My life", type:"work", shortDescription:"Ik heb google gemaakt", description: "Ik ben 25 jaar van mijn leven bezig geweest met het ontwikkelen van google."},
    {imageURL: "../../../../assets/projects/placeholder2.jpg", title: "Work 2", time: "My life", type:"work", shortDescription:"Ik heb google gemaakt", description: "Ik ben 25 jaar van mijn leven bezig geweest met het ontwikkelen van google."},
    {imageURL: "../../../../assets/projects/google.svg", title: "Work 3", time: "My life", type:"work", shortDescription:"Ik heb google gemaakt", description: "Ik ben 25 jaar van mijn leven bezig geweest met het ontwikkelen van google."},
    {imageURL: "../../../../assets/projects/placeholder2.jpg", title: "Education 1", time: "My life", type:"education", shortDescription:"Ik heb google gemaakt", description: "Ik ben <b>25 jaar</b> van mijn leven bezig geweest met het ontwikkelen van google."},
  ]
  filteredProjects = this.projects;
  showProject: Project = this.filteredProjects[0];

  adjustNumber(n: number){
    this.projectIndex += n;
    if(this.projectIndex <= 0) this.projectIndex = this.filteredProjects.length;
    if(this.projectIndex > this.filteredProjects.length) this.projectIndex = 1;

    this.showProjectF();
  }
  
  showProjectF() {
    this.showProject = this.filteredProjects[this.projectIndex - 1];
  }

  onWorkChange(){
    this.showWork = !this.showWork;
    this.filterArray();
  }
  onEducationChange(){
    this.showEducation = !this.showEducation;
    this.filterArray();
  }
  onPersonalChange(){
    this.showPersonal = !this.showPersonal;
    this.filterArray();
  }

  filterArray(){
    this.showArray = [];
    if(this.showWork) this.showArray.push("work");
    if(this.showEducation) this.showArray.push("education");
    if(this.showPersonal) this.showArray.push("personal");

    this.filteredProjects = [];
    this.projectIndex = 1;
    this.projects.map((project) => {
      if(this.showArray.includes(project.type)){
        this.filteredProjects.push(project)
      }
    })
    console.log(this.filteredProjects)
    this.showProjectF();
  }

}
