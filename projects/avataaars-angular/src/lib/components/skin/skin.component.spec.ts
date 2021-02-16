import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinComponent } from './skin.component';

describe('SkinComponent', () => {
  let component: SkinComponent;
  let fixture: ComponentFixture<SkinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
