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

  showArray: Array<String> = ["work"];

  data: Array<Object> = [ 
    {shown: this.showArray, time: '8 januari 2001', name: 'Geboorte van mij', type: 'personal', description: 'Toen ben ik geboren'},

    {shown: this.showArray, time: '1 september 2012', name: 'Start in SVT', type: 'education', description: 'Start van middelbare school'},
    {shown: this.showArray, time: '1 september 2016', name: 'Overschakelen naar informaticabeheer', type: 'education', description: 'Overgeschakeld naar informaticabeheer aangezien dat dit dichter bij mijn interesse veld ligt.'},
    {shown: this.showArray, time: '31 juni 2019', name: 'Afgestudeerd aan SVT', type: 'education', description: 'Afgestudeerd met diploma informaticabeheer'},
    {shown: this.showArray, time: '1 sepetember 2019', name: 'Start IT Factory Thomasmore Geel', type: 'education', description: 'Start van IT Factory aan Thomas More Geel'},
    {shown: this.showArray, time: '1 sepetember 2020', name: 'Start APP/AI binnen IT Factory', type: 'education', description: 'Na het eerste jaar keuze maken (gekozen voor Application Development/AI)'},
    
    {shown: this.showArray, time: '30 januari 2021', name: 'Website White Star', type: 'work', description: 'De website gemaakt voor voetbalclub White-Star Schorvoort in Turnhout'},
    {shown: this.showArray, time: '20 september 2022', name: 'Start Katz', type: 'work', description: 'Start bij Katz NV als Webdeveloper met Angular'},
    
    {shown: this.showArray, time: '1 september 20222', name: 'Start application development', type: 'education', description: 'Terug keuze moeten maken, gekozen voor Application development'},

    {shown: this.showArray, time: '30 januari 2022', name: 'Ontslag genomen bij Katz', type: 'work', description: 'Besloten om te stoppen met werken vanwege moeilijke uren'},
    {shown: this.showArray, time: '1 juli 2022', name: 'Begin vakantiejob BVL', type: 'work', description: 'Start bij BVL'},
    {shown: this.showArray, time: '15 augustus 2022', name: 'Einde vakantiejob BVL', type: 'work', description: 'Einde bij BVL'},

    {shown: this.showArray, time: '26 februari 2023', name: 'Start stage Axxes', type: 'education', description: 'Begin van stage bij Axxes'}
  ]

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
