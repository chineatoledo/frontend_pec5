import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../services/models/image.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
  @Input() images: Image[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }
}
