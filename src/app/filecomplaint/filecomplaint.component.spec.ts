import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilecomplaintComponent } from './filecomplaint.component';

describe('FilecomplaintComponent', () => {
  let component: FilecomplaintComponent;
  let fixture: ComponentFixture<FilecomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilecomplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilecomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
