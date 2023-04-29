import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstatususerComponent } from './viewstatususer.component';

describe('ViewstatususerComponent', () => {
  let component: ViewstatususerComponent;
  let fixture: ComponentFixture<ViewstatususerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstatususerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewstatususerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
