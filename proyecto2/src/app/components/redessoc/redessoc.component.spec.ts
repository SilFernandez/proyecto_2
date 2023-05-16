import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedessocComponent } from './redessoc.component';

describe('RedessocComponent', () => {
  let component: RedessocComponent;
  let fixture: ComponentFixture<RedessocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedessocComponent]
    });
    fixture = TestBed.createComponent(RedessocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
