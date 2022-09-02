import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OffresState, OffresStateEnum } from 'src/app/ngrx/offres.reducer';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  offresState$:Observable<OffresState> |null=null;
  readonly OffresStateEnum= OffresStateEnum;
  constructor(private store:Store<any>, private router:Router) { }

  ngOnInit(): void {
    this.offresState$=this.store.pipe(
      map((state)=> state.catalogState)
    );
  }

  onNewOffres(){
    this.router.navigateByUrl("/newoffre")
  }

}
