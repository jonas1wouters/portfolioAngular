import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  showWork = true;
  showEducation = false;
  showPersonal = false;

  showArray: Array<String> = ["work"]

  onWorkChange(){
    this.showWork = !this.showWork;
    this.makeArray()
  }
  onEducationChange(){
    this.showEducation = !this.showEducation;
    this.makeArray()
  }
  onPersonalChange(){
    this.showPersonal = !this.showPersonal;
    this.makeArray()
  }

  makeArray () {
    this.showArray = [];
    if(this.showWork) this.showArray.push("work");
    if(this.showEducation) this.showArray.push("education");
    if(this.showPersonal) this.showArray.push("personal");
  }
}
