import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-full-cv',
  templateUrl: './full-cv.component.html',
  styleUrls: ['./full-cv.component.scss']
})
export class FullCvComponent {
  @Input() cvIsVisible: Boolean = true;

}
