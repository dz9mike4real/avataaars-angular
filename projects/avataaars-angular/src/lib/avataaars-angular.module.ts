import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SkinComponent } from './components/skin/skin.component';
@NgModule({
  declarations: [AvatarComponent, SkinComponent],
  imports: [
    CommonModule
  ],
  exports: [AvatarComponent]
})
export class AvataaarsAngularModule { }
