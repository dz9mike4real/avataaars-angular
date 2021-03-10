import { Component, Input, OnInit } from '@angular/core';
import {SKIN_COLOR} from '../../models/constants/skinColor.constant';

@Component({
  selector: '[skin]',
  templateUrl: './skin.component.html',
  styleUrls: []
})

export class SkinComponent implements OnInit {
  @Input()color!: string;
  colorValue!: string;
  constructor() { }
  ngOnInit(): void { 
      this.colorValue = SKIN_COLOR[this.color]? SKIN_COLOR[this.color] :SKIN_COLOR['Light'];
   }
   
  
}

