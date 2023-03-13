import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvKnowledgesComponent } from './cv-knowledges.component';

describe('CvKnowledgesComponent', () => {
  let component: CvKnowledgesComponent;
  let fixture: ComponentFixture<CvKnowledgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvKnowledgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvKnowledgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
