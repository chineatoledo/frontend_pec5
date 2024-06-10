import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { ImagesService } from '../../services/images.service';
import { Image } from '../../services/models/image.interface';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fallIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100%)' }),
        animate('1500ms ease-in', style({ opacity: 1, transform: 'translateY(0%)' })),
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit{
  screen: boolean = true;
  images: Image[] = [];
  loading: boolean = false; //hoals

  constructor(
    private imagesService: ImagesService
  ) { }

  ngOnInit(): void {
    this.loading = true;

    setTimeout(() => {
      this.imagesService.getAllImages()
      .pipe (
        timeout(5000)
      )
      .subscribe({
        next: (images) => {
          this.images = images;
          this.loading = false;
        },
        error: (err) => {
          console.log('Error: ', err);
          this.loading = false;
        }
      });
    }, 500);

  }

  listScreen() {
    this.screen = true;
  }

  moduleScreen() {
    this.screen = false;
  }
}
