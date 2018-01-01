import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGalleryComponent } from './ng-gallery.component';

describe('NgGalleryComponent', () => {
  let component: NgGalleryComponent;
  let fixture: ComponentFixture<NgGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
