import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductEditComponent } from './admin-product-edit.component';

describe('AdminProductEditComponent', () => {
  let component: AdminProductEditComponent;
  let fixture: ComponentFixture<AdminProductEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProductEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
