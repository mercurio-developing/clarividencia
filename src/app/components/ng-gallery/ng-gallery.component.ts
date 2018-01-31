import { Component, OnInit, OnDestroy,Inject } from '@angular/core';
import { GalleryService } from './ng-gallery.service';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/platform-browser';
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: 'app-ng-gallery',
  templateUrl: './ng-gallery.component.html',
  styleUrls: ['./ng-gallery.component.css'],
  providers: [GalleryService]

})
export class NgGalleryComponent implements OnInit,OnDestroy {
  
  photos:any[]
  selectedPhoto: string
  enableView:boolean;
  enablePhotos:boolean;
  status:boolean = false;
  wasClicked:boolean = false
  other:number;
  width: number = document.documentElement.clientWidth;

  private subscription: ISubscription;

  constructor(private galleryService:GalleryService,@Inject(DOCUMENT) private docu) {
    
    const $resizeEvent = Observable.fromEvent(window, 'resize')

    .map(() => {
      let x = document.documentElement.clientWidth;
      return x
    })

  this.subscription = $resizeEvent.subscribe(data => {
    this.width = data
    console.log(this.width)
    if(this.width <= 768){
      this.enableView = false;
    }
  }); 
  
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

  ngOnDestroy() { 
    this.subscription.unsubscribe();
  }

}
