import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvKnowledgeComponent } from './cv-knowledge.component';

describe('CvKnowledgeComponent', () => {
  let component: CvKnowledgeComponent;
  let fixture: ComponentFixture<CvKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvKnowledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
