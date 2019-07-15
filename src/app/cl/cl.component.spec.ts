import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClComponent } from './cl.component';

describe('ClComponent', () => {
  let component: ClComponent;
  let fixture: ComponentFixture<ClComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
