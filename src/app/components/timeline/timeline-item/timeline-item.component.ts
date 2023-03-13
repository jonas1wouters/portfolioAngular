import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent {
  @Input() time: String = "";
  @Input() name: String = "";
  @Input() type: String = "personal";
  @Input() description: String = "";
  @Input() shown: Array<String> = ["personal"]
}
