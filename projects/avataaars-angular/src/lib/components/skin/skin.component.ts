import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[skin]',
  templateUrl: './skin.component.html',
  styleUrls: []
})

export class SkinComponent implements OnInit {
  @Input() color = '';
  constructor() { }
  ngOnInit(): void {  }
}
