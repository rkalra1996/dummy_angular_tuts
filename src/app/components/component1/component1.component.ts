import { Component, OnInit, Input } from '@angular/core';
import {SharableService } from './../../_services/sharable.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  @Input() data : string = '';
  constructor(private shSrvc : SharableService) { }

  ngOnInit() {
  
  }

  sendData(dataToSend : string){
    this.shSrvc.sendMessage(dataToSend);
  }

}
