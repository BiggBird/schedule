import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekcardComponent } from './weekcard.component';

describe('WeekcardComponent', () => {
  let component: WeekcardComponent;
  let fixture: ComponentFixture<WeekcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
