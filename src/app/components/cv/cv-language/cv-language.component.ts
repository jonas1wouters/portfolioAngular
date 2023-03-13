import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv-language',
  templateUrl: './cv-language.component.html',
  styleUrls: ['./cv-language.component.scss']
})
export class CvLanguageComponent {
  @Input() language: String = "";
  @Input() score: String = "";

}
