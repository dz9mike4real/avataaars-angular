import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'avataaar',
  templateUrl:'./avatar.component.html',
  styles: [
  ]
})
export class AvatarComponent implements OnInit {
  @Input() avatarStyle : string ='';
  constructor() {
   
  }
    
  ngOnInit(): void {
     console.log(this.avatarStyle);
  }

}
