import { Component, Input, OnInit } from '@angular/core';
import { AvatarStyle} from '../../models/enums/avatarStyle.enum';
import { SkinColor} from '../../models/enums/skinColor.enum';
@Component({
  selector: 'avatar',
  templateUrl:'./avatar.component.html',
  styles: [
  ]
})
export class AvatarComponent implements OnInit {
  @Input() style: object ={};
  @Input() avatarStyle = AvatarStyle.Circle;
  @Input() skinColor = SkinColor.Light;
  constructor() {}
  ngOnInit(): void {}
}
