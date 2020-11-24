import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArrivalComponent } from './create-arrival.component';

describe('CreateArrivalComponent', () => {
  let component: CreateArrivalComponent;
  let fixture: ComponentFixture<CreateArrivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateArrivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
