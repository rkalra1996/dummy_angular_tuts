import { Component, OnInit } from '@angular/core';
import { SharableService } from 'src/app/_services/sharable.service';

@Component({
  selector: 'app-component22',
  templateUrl: './component22.component.html',
  styleUrls: ['./component22.component.css']
})
export class Component22Component implements OnInit {

  constructor(private shSrvc : SharableService) { }

  ngOnInit() {
  }

  sendData(){
    //this will be used to send and empty data = 'empty string'
    this.shSrvc.sendMessage('');
  }


}
