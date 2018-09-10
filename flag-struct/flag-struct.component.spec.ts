import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagStructComponent } from './flag-struct.component';

describe('FlagStructComponent', () => {
  let component: FlagStructComponent;
  let fixture: ComponentFixture<FlagStructComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagStructComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagStructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
