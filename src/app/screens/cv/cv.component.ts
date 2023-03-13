import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  public innerWidth: Number = 0;
  public isVisible: Boolean = true;

  ngOnInit() {
      this.innerWidth = window.innerWidth;
      if(this.innerWidth > 840) this.isVisible = true
      if(this.innerWidth < 840) this.isVisible = false
      console.log(this.innerWidth)
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 840) this.isVisible = true
    if(this.innerWidth < 840) this.isVisible = false
    console.log(this.innerWidth)
  }
}
