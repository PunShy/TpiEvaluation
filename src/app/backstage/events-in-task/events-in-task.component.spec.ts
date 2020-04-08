import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsInTaskComponent } from './events-in-task.component';

describe('EventsInTaskComponent', () => {
  let component: EventsInTaskComponent;
  let fixture: ComponentFixture<EventsInTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsInTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsInTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
