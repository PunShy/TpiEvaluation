import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlBaseComponent } from './ol-base.component';

describe('OlBaseComponent', () => {
  let component: OlBaseComponent;
  let fixture: ComponentFixture<OlBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
