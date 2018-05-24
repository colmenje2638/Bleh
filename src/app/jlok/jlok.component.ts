import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jlok',
  templateUrl: './jlok.component.html',
  styleUrls: ['./jlok.component.css']
})
export class JlokComponent implements OnInit {

  constructor(public Http: HttpClient) { }

  ngOnInit() {
    this.Http.get('http://localhost:3000/')
    .subscribe((Response:any)=>{
      console.log(Response);
    })
  }

}
