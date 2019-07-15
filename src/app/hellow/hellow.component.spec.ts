import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HellowComponent } from './hellow.component';

describe('HellowComponent', () => {
  let component: HellowComponent;
  let fixture: ComponentFixture<HellowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HellowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
