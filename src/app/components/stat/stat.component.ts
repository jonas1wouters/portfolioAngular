import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent {
  @Input() number: string = "";
  @Input() innerHTML: string = "";
  id: any;

  constructor() {};

  ngOnInit() {
    this.id = setInterval(() => {
      let stats = document.getElementsByClassName('stat');
      if(!stats[0].classList.contains("show")){
        for(let i = 0; i < stats.length; i++) {
          let stat = stats[i];
          if (this.isInViewport(stat)) {
            stat.classList.add("show")
          }
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

