import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSegmentModalComponent } from './add-segment-modal.component';

describe('AddSegmentModalComponent', () => {
  let component: AddSegmentModalComponent;
  let fixture: ComponentFixture<AddSegmentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSegmentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSegmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
