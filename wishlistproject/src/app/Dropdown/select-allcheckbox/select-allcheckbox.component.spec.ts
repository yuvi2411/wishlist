import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAllcheckboxComponent } from './select-allcheckbox.component';

describe('SelectAllcheckboxComponent', () => {
  let component: SelectAllcheckboxComponent;
  let fixture: ComponentFixture<SelectAllcheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAllcheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectAllcheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
