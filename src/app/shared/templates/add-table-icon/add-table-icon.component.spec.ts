import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTableIconComponent } from './add-table-icon.component';

describe('AddTableIconComponent', () => {
  let component: AddTableIconComponent;
  let fixture: ComponentFixture<AddTableIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTableIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTableIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
