import { Component, OnInit } from '@angular/core';
import { GalleryService } from './ng-gallery.service';

@Component({
  selector: 'app-ng-gallery',
  templateUrl: './ng-gallery.component.html',
  styleUrls: ['./ng-gallery.component.css'],
  providers: [GalleryService]

})
export class NgGalleryComponent implements OnInit {
  
  photos:any[]
  selectedPhoto: string
  enableView:boolean;
  enablePhotos:boolean;
  status:boolean = false;
  wasClicked:boolean = false
  other:number;

  constructor(private galleryService:GalleryService) {
   }

  ngOnInit() {
    this.enableView = false;
    this.photos = this.galleryService.getPhotos();
  }


  change(index){
    this.other = index;
    this.enablePhotos = true;
    this.photos = this.galleryService.getCategory(index);
  }
  
  all() {
    this.other = 4;
    this.photos = this.galleryService.getAll();
  }

  openSlide(photo){
    this.enableView = true;
    this.selectedPhoto = photo.srcElement.attributes.src.value
    return this.selectedPhoto;
  }

  moveToLeft(){
      for(let i = 0; i < this.photos.length;i++){
        if (this.photos[i] === this.selectedPhoto){
          if (this.selectedPhoto != this.photos[0]){
          this.selectedPhoto = this.photos[i - 1];
          return this.selectedPhoto;
        }
      }
    }
  }

  moveToRight(){
      for (let i = 0; i < this.photos.length; i++) {
        if (this.photos[i] === this.selectedPhoto) {
          let limit = this.photos.length;
          if (this.selectedPhoto != this.photos[limit - 1]) {
          this.selectedPhoto = this.photos[i + 1];
          return this.selectedPhoto;
        }
      }
    }
  }

}
