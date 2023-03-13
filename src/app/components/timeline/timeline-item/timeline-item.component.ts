import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent {
  @Input() shown: Array<String> = ["personal"]
  @Input() item: any = {time: '', name: '', type: '', description: ''}
  @Input() even: Boolean = false;
}
