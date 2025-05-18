import { Component } from '@angular/core';
import { supabase } from '../supabaseClient';

@Component({
  selector: 'app-upload-wallpaper',
  templateUrl: './upload-wallpaper.component.html',
  styleUrls: ['./upload-wallpaper.component.scss']
})
export class UploadWallpaperComponent {
  category: string = '';
  tags: string = '';
  file: File | null = null;
  uploading: boolean = false;

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
    }
  }

  async upload() {
    if (!this.file || !this.category || !this.tags) {
      alert('All fields are required.');
      return;
    }

    this.uploading = true;
    const fileName = `${Date.now()}_${this.file.name}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('wallpapers')
      .upload(fileName, this.file);

    if (uploadError) {
      this.uploading = false;
      alert('File upload failed: ' + uploadError.message);
      return;
    }

    const imageUrl = `https://yaduglyxntcumpxhsxha.supabase.co/storage/v1/object/public/wallpapers/${fileName}`;

    const { error: insertError } = await supabase
      .from('wallpapers')
      .insert([
        {
          category: this.category,
          tags: this.tags,
          image_url: imageUrl,
        },
      ]);

    this.uploading = false;

    if (insertError) {
      alert('Failed to store metadata: ' + insertError.message);
    } else {
      alert('Upload successful!');
      this.category = '';
      this.tags = '';
      this.file = null;
    }
  }
}
