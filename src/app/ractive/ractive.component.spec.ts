import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RactiveComponent } from './ractive.component';

describe('RactiveComponent', () => {
  let component: RactiveComponent;
  let fixture: ComponentFixture<RactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
