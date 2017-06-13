import { Component } from '@angular/core';
import { Photo } from './photo';
import { OnInit } from '@angular/core';
import { PhotosService } from './photos.service';


// const PHOTOS: Photo[] = [
//   {path: 'http://d1lzk9e2diyr9s.cloudfront.net/walks-pics-smaller/iceland1.jpg', place: 'Iceland'},
//   {path: 'http://d1lzk9e2diyr9s.cloudfront.net/walks-pics-smaller/iceland2.jpg', place: 'Iceland'}
// ];

const PHOTOS: Photo[] = [];
const path = 'http://d1lzk9e2diyr9s.cloudfront.net/walks-pics-smaller/';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})

export class PhotosComponent implements OnInit {
  photos: Photo[]; // This is where the photos from the getPhotos func will be stored
  constructor(private photosService: PhotosService) { }
  getPhotos(): void {
    this.photosService.getPhotos().then(photos => this.photos = photos);
  }
  ngOnInit(): void {
    this.getPhotos();
  }
}
