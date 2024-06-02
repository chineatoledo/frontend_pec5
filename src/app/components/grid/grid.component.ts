import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../services/models/image.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnInit{
  @Input() images: Image[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }
}
