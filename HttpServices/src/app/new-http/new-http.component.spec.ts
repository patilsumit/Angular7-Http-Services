import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHttpComponent } from './new-http.component';

describe('NewHttpComponent', () => {
  let component: NewHttpComponent;
  let fixture: ComponentFixture<NewHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
