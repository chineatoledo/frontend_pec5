import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from '../../services/models/image.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit{
  panelOpenState: boolean = false;
  image: Image = {
    id: '',
    author: '',
    width: 0,
    height: 0,
    url: '',
    download_url: ''
  }

  constructor(
      private imageService: ImagesService,
      private activatedRoute: ActivatedRoute,
      private router: Router
  ) {

  }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id')
    console.log('Indentifier -> ' , identifier);

    if(identifier) {
      
      this.imageService.getImageById(identifier).subscribe({
        next: (image) => {
          if (!image) {
            this.router.navigateByUrl('/');
            return;
          }
          this.image = image;
        },
        error: (err) => {
          console.error('Error fetching image:', err);
          this.router.navigateByUrl('/');
        }
      });
    }
  }

}
