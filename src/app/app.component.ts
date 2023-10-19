import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-carousel-11-10-23';
  images = [
    'https://fastly.picsum.photos/id/528/200/300.jpg?hmac=nQ5klrDwddW0du03zqKfOpyHkFBDaspI729AfK_FXPY',
    'https://fastly.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA',
    'https://fastly.picsum.photos/id/931/200/300.jpg?hmac=j4ZWid4CKIZ1iSYZTs79i2GaiX4vgxlB2_1Efxiko84'
  ];
  src=this.images[0];
  i=0;
  show(item:string){
    this.src=item;
  }
  changeImage(move: string) {
    if (move === 'next') {
      this.src=this.images[this.i++];
    } 
    else if (move === 'previous') {
      if (this.i <= 0) {
        this.i = this.images.length - 1;
        this.src = this.images[this.i];
      }
      else{
        this.src=this.images[this.i--];
      }
    }
    if (this.i < 0 || this.i >= this.images.length) {
      this.i = this.i % 3;
    }
  }
}