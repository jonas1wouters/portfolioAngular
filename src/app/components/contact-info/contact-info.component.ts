import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent {
  birthdayString: string = "01/08/2001"
  birthday: Date = new Date(this.birthdayString);
  currentDate: Date = new Date()
  age!: Number;

  ngOnInit(){
    let timePassedNum = this.currentDate.getTime() - this.birthday.getTime();
    const yearsPassed = Math.floor(timePassedNum / (1000 * 3600 * 24) / 365)
    this.age = yearsPassed
  }

}
