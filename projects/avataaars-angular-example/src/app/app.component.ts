import { Component } from '@angular/core';
import {AvatarStyle, SkinColor} from 'avataaars-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  extraStyle:any;
  title = 'avataaars-angular-example';
  avatarStyle = AvatarStyle.Circle;
  skinColor = SkinColor.Black;
  constructor(){}
 
}
