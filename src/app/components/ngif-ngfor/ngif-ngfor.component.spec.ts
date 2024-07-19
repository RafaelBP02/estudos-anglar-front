import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifNgforComponent } from './ngif-ngfor.component';

describe('NgifNgforComponent', () => {
  let component: NgifNgforComponent;
  let fixture: ComponentFixture<NgifNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgifNgforComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
