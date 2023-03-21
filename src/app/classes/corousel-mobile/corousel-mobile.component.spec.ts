import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorouselMobileComponent } from './corousel-mobile.component';

describe('CorouselMobileComponent', () => {
  let component: CorouselMobileComponent;
  let fixture: ComponentFixture<CorouselMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorouselMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorouselMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
