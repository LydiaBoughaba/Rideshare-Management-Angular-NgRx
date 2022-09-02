import { Component, Input, OnInit } from '@angular/core';
import { OffresState } from 'src/app/ngrx/offres.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() state:OffresState|null=null;

  constructor() { }

  ngOnInit(): void {
  }

}
