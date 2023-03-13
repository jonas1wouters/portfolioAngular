import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-info-list-item',
  templateUrl: './contact-info-list-item.component.html',
  styleUrls: ['./contact-info-list-item.component.scss']
})
export class ContactInfoListItemComponent {
  @Input() label: string = "";
  @Input() info: string = "";
}
