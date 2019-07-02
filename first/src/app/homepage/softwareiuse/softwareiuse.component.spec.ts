import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareiuseComponent } from './softwareiuse.component';

describe('SoftwareiuseComponent', () => {
  let component: SoftwareiuseComponent;
  let fixture: ComponentFixture<SoftwareiuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareiuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareiuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
