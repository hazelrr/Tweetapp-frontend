import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewusertweetsComponent } from './viewusertweets.component';

describe('ViewusertweetsComponent', () => {
  let component: ViewusertweetsComponent;
  let fixture: ComponentFixture<ViewusertweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewusertweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewusertweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
