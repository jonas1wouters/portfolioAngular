import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIsJonasComponent } from './who-is-jonas.component';

describe('WhoIsJonasComponent', () => {
  let component: WhoIsJonasComponent;
  let fixture: ComponentFixture<WhoIsJonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoIsJonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoIsJonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
