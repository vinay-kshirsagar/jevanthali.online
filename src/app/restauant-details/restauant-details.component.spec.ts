import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauantDetailsComponent } from './restauant-details.component';

describe('RestauantDetailsComponent', () => {
  let component: RestauantDetailsComponent;
  let fixture: ComponentFixture<RestauantDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauantDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
