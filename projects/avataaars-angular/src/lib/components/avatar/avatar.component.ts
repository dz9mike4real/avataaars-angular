import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'avatar',
  templateUrl:'./avatar.component.html',
  styles: [
  ]
})
export class AvatarComponent implements OnInit {
  @Input() style: object ={};
  @Input() avatarStyle!: string;
  @Input() skinColor!: string;
  constructor() {}
  ngOnInit(): void {}
}
