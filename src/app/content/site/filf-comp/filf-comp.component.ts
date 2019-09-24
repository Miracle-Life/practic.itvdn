import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";

@Component({
  selector: 'app-filf-comp',
  templateUrl: './filf-comp.component.html',
  styleUrls: ['./filf-comp.component.css']
})
export class FilfCompComponent implements OnInit {
  @Input() film: any;


  constructor() { }


  ngOnInit() {
  }

}
