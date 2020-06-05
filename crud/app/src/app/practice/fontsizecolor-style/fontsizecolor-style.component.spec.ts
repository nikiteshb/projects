import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsizecolorStyleComponent } from './fontsizecolor-style.component';

describe('FontsizecolorStyleComponent', () => {
  let component: FontsizecolorStyleComponent;
  let fixture: ComponentFixture<FontsizecolorStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontsizecolorStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontsizecolorStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
