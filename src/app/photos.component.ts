import { Component } from '@angular/core';
import { Photo } from './photo';
import { OnInit } from '@angular/core';
import { PhotosService } from './photos.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {isUndefined} from 'util';


// const PHOTOS: Photo[] = [
//   {path: 'http://d1lzk9e2diyr9s.cloudfront.net/walks-pics-smaller/iceland1.jpg', place: 'Iceland'},
//   {path: 'http://d1lzk9e2diyr9s.cloudfront.net/walks-pics-smaller/iceland2.jpg', place: 'Iceland'}
// ];

// Import the switchMap operator to use later with the route parameters Observable.
import 'rxjs/add/operator/switchMap';

const PHOTOS: Photo[] = [];
const path = 'http://d1lzk9e2diyr9s.cloudfront.net/walks-pics-smaller/';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})

export class PhotosComponent implements OnInit {
  photos: Photo[]; // This is where the photos from the getPhotos func will be stored
  constructor(private photosService: PhotosService, private route: ActivatedRoute
  ) { }
  getPhotos(): void {
    this.photosService.getPhotos().then(photos => this.photos = photos);
  }
  ngOnInit(): void {
    if ( isUndefined(this.route.params['_value']['search']) ) {
      // console.log('No Params');
      this.getPhotos();
    } else {
      // console.log('Yes Params');
      // console.log(this.route.params['_value']['search']);
      this.route.params.switchMap((params: Params) => this.photosService.getPhotosBySearchQ(params['search']))
        .subscribe(photos => this.photos = photos);
    }
  }
}
