import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Photo } from './photo';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotosService {
  // private photosUrl = 'http://localhost:3000/api/photos';
  private photosUrl = '/api/photos';
  private photosUrl2 = '/api/photos?search_q=';
  constructor(private http: Http) { }
  // Get photo objects from mongodb
  getPhotos(): Promise<Photo[]> {
    return this.http.get(this.photosUrl)
      .toPromise().then(response => response.json() as Photo[])
      .catch(this.handleError);
  }
  getPhotosBySearchQ(id: string): Promise<Photo[]> {
    // const url = `http://localhost:3000/api/photos?search_q=${id}`;
    return this.http.get(`${this.photosUrl2}${id}`).toPromise().then(response => response.json() as Photo[]).catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error ocurred', error);
    return Promise.reject(error.message || error);
  }
}
