import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { PhotosComponent } from './photos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'photos',
    pathMatch: 'full'
  },
  {
    path: 'photos',
    component: PhotosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

