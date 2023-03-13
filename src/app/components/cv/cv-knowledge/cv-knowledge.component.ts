import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv-knowledge',
  templateUrl: './cv-knowledge.component.html',
  styleUrls: ['./cv-knowledge.component.scss']
})
export class CvKnowledgeComponent {
  @Input() type: String = "";
  @Input() knowledges: Array<String> = ["", ""]
}
