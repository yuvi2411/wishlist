import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCustomsComponent } from './select-customs.component';

describe('SelectCustomsComponent', () => {
  let component: SelectCustomsComponent;
  let fixture: ComponentFixture<SelectCustomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCustomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCustomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
