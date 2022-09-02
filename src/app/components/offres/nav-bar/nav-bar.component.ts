import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetAllOffresAction, SearchOffresAction } from 'src/app/ngrx/offres.actions';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private store:Store<any>, private router:Router) { }

  ngOnInit(): void {
  }
  onGetAllOffres(){
    this.store.dispatch(new GetAllOffresAction({}))
  }
  onSearch(dataForm:any){
    this.store.dispatch(new SearchOffresAction({mot :dataForm.mot,vDepart : dataForm.vDepart,vArrivee:dataForm.vArrivee,date:dataForm.date}));
  }
  onNewOffres(){
    this.router.navigateByUrl("/newoffre")
  }

}
