import { Component, Input } from '@angular/core';
import { TimelineItem } from 'src/app/interfaces/timelineItem';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent {
  @Input() shown: Array<String> = ["personal"]
  @Input() item: TimelineItem = {shown: ['personal'], time: '', name: '', type: '', description: ''}
  @Input() even: Boolean = false;
}
