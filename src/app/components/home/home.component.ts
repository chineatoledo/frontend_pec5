import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { Image } from '../../services/models/image.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  screen: boolean = true;
  images: Image[] = [];

  constructor(
    private imagesService: ImagesService
  ) { }

  ngOnInit(): void {
    this.imagesService
      .getAllImages()
      .subscribe((images) => this.images = images)
  }

  listScreen() {
    this.screen = true;
  }

  moduleScreen() {
    this.screen = false;
  }

}
