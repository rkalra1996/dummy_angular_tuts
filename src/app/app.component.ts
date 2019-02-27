import { Component, OnInit } from '@angular/core';
import {SharableService } from './_services/sharable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data = 'default data';

  constructor(private Shsrvc : SharableService){}

  ngOnInit(): void {
    this.Shsrvc.BSObs.subscribe(data => {
      this.data = data;
    });
    
  }

}
