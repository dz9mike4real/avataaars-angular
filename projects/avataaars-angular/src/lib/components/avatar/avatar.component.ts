import { Component, Input, OnInit } from '@angular/core';
import { AvatarStyle} from '../../models/enums/avatarStyle.enum';

@Component({
  selector: 'avatar',
  templateUrl:'./avatar.component.html',
  styles: [
  ]
})
export class AvatarComponent implements OnInit {
  @Input() style: object ={};
  @Input() avatarStyle = AvatarStyle.Circle;
  
  constructor() {
   
  }
    
  ngOnInit(): void {
     console.log(this.avatarStyle);
     console.log(this.style);
  }

}
