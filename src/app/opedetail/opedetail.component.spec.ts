import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpedetailComponent } from './opedetail.component';

describe('OpedetailComponent', () => {
  let component: OpedetailComponent;
  let fixture: ComponentFixture<OpedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
