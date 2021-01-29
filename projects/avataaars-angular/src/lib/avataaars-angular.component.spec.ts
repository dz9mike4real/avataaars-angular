import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvataaarsAngularComponent } from './avataaars-angular.component';

describe('AvataaarsAngularComponent', () => {
  let component: AvataaarsAngularComponent;
  let fixture: ComponentFixture<AvataaarsAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvataaarsAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvataaarsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
