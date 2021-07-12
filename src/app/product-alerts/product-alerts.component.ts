import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../products';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent implements OnInit {
  @Input() product !: Product | undefined ;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
