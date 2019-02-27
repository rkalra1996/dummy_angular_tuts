import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component21',
  templateUrl: './component21.component.html',
  styleUrls: ['./component21.component.css']
})
export class Component21Component implements OnInit {

  @Input() data : string = '';
  constructor() { }

  ngOnInit() {
  }

}
