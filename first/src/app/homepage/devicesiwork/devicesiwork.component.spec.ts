import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesiworkComponent } from './devicesiwork.component';

describe('DevicesiworkComponent', () => {
  let component: DevicesiworkComponent;
  let fixture: ComponentFixture<DevicesiworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesiworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesiworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
