import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadWallpaperComponent } from './upload-wallpaper/upload-wallpaper.component';

const routes: Routes = [
  { path: 'upload', component: UploadWallpaperComponent },
  { path: '', redirectTo: 'upload', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
