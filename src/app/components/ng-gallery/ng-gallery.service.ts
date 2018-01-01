import { EventEmitter, Injectable } from '@angular/core';

@Injectable()

export class GalleryService {
   
photosM = [
    [
        '../assets/imgs/web-med/natu-1.jpg',
        '../assets/imgs/web-med/natu-2.jpg',
        '../assets/imgs/web-med/natu-3.jpg',
        '../assets/imgs/web-med/natu-4.jpg',
        '../assets/imgs/web-med/natu-5.jpg',
        '../assets/imgs/web-med/natu-6.jpg',
        '../assets/imgs/web-med/natu-7.jpg',
        '../assets/imgs/web-med/natu-8.jpg',
        '../assets/imgs/web-med/natu-9.jpg',
        '../assets/imgs/web-med/natu-10.jpg',
        '../assets/imgs/web-med/natu-11.jpg',
        '../assets/imgs/web-med/natu-12.jpg',
        '../assets/imgs/web-med/natu-13.jpg',
        '../assets/imgs/web-med/natu-14.jpg'
        ],
    [
        '../assets/imgs/web-med/retr-1.jpg',
        '../assets/imgs/web-med/retr-2.jpg',
        '../assets/imgs/web-med/retr-3.jpg',
        '../assets/imgs/web-med/retr-4.jpg',
        '../assets/imgs/web-med/retr-5.jpg',
        '../assets/imgs/web-med/retr-6.jpg',
        '../assets/imgs/web-med/retr-7.jpg',
        '../assets/imgs/web-med/retr-8.jpg',
        '../assets/imgs/web-med/retr-9.jpg',
        '../assets/imgs/web-med/retr-10.jpg',
        '../assets/imgs/web-med/retr-11.jpg',
        '../assets/imgs/web-med/retr-12.jpg',
        '../assets/imgs/web-med/retr-13.jpg',
    ],
    [
        '../assets/imgs/web-med/here-1.jpg',
        '../assets/imgs/web-med/here-2.jpg',
        '../assets/imgs/web-med/here-3.jpg',
        '../assets/imgs/web-med/here-4.jpg',
        '../assets/imgs/web-med/here-5.jpg',
        '../assets/imgs/web-med/here-6.jpg',
        '../assets/imgs/web-med/here-7.jpg',
        '../assets/imgs/web-med/here-8.jpg',
        '../assets/imgs/web-med/here-9.jpg',
        '../assets/imgs/web-med/here-10.jpg',
        '../assets/imgs/web-med/here-11.jpg',
        '../assets/imgs/web-med/here-12.jpg',
    ]
        ]

    allPhotos = []

    getPhotos(){
        this.allPhotos = this.allPhotos.concat(this.photosM[0])
        this.allPhotos = this.allPhotos.concat(this.photosM[1])
        this.allPhotos = this.allPhotos.concat(this.photosM[2])
        return this.allPhotos;
    }

    getCategory(index) {
        console.log(this.photosM[index])
        return this.photosM[index];
    }
    getAll(){
        return this.allPhotos;
    }
}