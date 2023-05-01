import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSparklibComponent } from './ngx-sparklib.component';

describe('NgxSparklibComponent', () => {
  let component: NgxSparklibComponent;
  let fixture: ComponentFixture<NgxSparklibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSparklibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSparklibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
