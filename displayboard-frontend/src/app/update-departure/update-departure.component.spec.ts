import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDepartureComponent } from './update-departure.component';

describe('UpdateDepartureComponent', () => {
  let component: UpdateDepartureComponent;
  let fixture: ComponentFixture<UpdateDepartureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDepartureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDepartureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
