import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadWallpaperComponent } from './upload-wallpaper.component';

describe('UploadWallpaperComponent', () => {
  let component: UploadWallpaperComponent;
  let fixture: ComponentFixture<UploadWallpaperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadWallpaperComponent]
    });
    fixture = TestBed.createComponent(UploadWallpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
