import { Component, OnInit, Input } from '@angular/core';
import { Move } from 'src/app/interfaces/move';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
  @Input() moves: Move[];
  @Input() isTitle: boolean;
  constructor() { }
  ngOnInit(): void {
  }
}
