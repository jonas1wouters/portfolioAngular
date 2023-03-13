import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoListItemComponent } from './contact-info-list-item.component';

describe('ContactInfoListItemComponent', () => {
  let component: ContactInfoListItemComponent;
  let fixture: ComponentFixture<ContactInfoListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInfoListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInfoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
