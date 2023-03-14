import { Component, Input } from '@angular/core';
import { Statistic } from 'src/app/interfaces/statistic';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent {
  @Input() stat!: Statistic;
  
  id: any;

  constructor() {};

  ngOnInit() {
    this.id = setInterval(() => {
      console.log('Wow')
      let stat = document.getElementsByClassName('stat' + this.stat.statId);
      if(!stat[0].classList.contains("show")){
        if (this.isInViewport(stat[0])) {
          stat[0].classList.add("show")
          clearInterval(this.id);
        }
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }


  isInViewport = function (elem: any) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}

