import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { employe } from 'src/app/model/model.employee';
import { offres } from 'src/app/model/model.offres';
import { NewOffresAction, SaveOffresAction } from 'src/app/ngrx/offres.actions';
import { OffresState, OffresStateEnum } from 'src/app/ngrx/offres.reducer';

@Component({
  selector: 'app-nouvelle-offre',
  templateUrl: './nouvelle-offre.component.html',
  styleUrls: ['./nouvelle-offre.component.css']
})
export class NouvelleOffreComponent implements OnInit {

  offreFormGroup!:FormGroup;
  submitted:boolean=false;
  offres?:offres;
  employe?:employe;
  state:OffresState|null=null;
  readonly OffresStateEnum=OffresStateEnum;

  constructor(private fb:FormBuilder,private store:Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new NewOffresAction({}));
    this.store.subscribe(state=>{
      this.state=state.catalogState;
      if(this.state?.dataState==OffresStateEnum.NEW){
        
        this.offreFormGroup=this.fb.group({
          nom:["",Validators.required],
          prenom:["",Validators.required],
          genre:["",Validators.required],
          adressMail: ["",Validators.required],
          v_depart:["",Validators.required],
          v_arrive:["",Validators.required],
          date:["",Validators.required],
        });
      }
    })
  }
  
  newOffre(){
    this.store.dispatch(new NewOffresAction({}));
  }

  onSaveOffres(){
    this.submitted=true;
    if(this.offreFormGroup?.invalid) return;
    this.offres = new offres();
    this.offres.v_arrive= this.offreFormGroup?.value.v_arrive;
    this.offres.v_depart = this.offreFormGroup?.value.v_depart;
    this.offres.date = this.offreFormGroup?.value.date;
    this.employe = new employe();
    this.employe.nom = this.offreFormGroup?.value.nom;
    this.employe.prenom = this.offreFormGroup?.value.prenom;
    this.employe.genre = this.offreFormGroup?.value.genre;
    this.employe.adressMail = this.offreFormGroup?.value.adressMail;
    this.offres.employe = this.employe;
    this.store.dispatch(new SaveOffresAction(this.offres));
  }

}
 