import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { employe } from 'src/app/model/model.employee';
import { offres } from 'src/app/model/model.offres';
import { EditOffresAction, UpdateOffresAction } from 'src/app/ngrx/offres.actions';
import { OffresState, OffresStateEnum } from 'src/app/ngrx/offres.reducer';

@Component({
  selector: 'app-modifier-offre',
  templateUrl: './modifier-offre.component.html',
  styleUrls: ['./modifier-offre.component.css']
})
export class ModifierOffreComponent implements OnInit {

  offreId:number;
  offreFormGroup!:FormGroup;
  formBuit:boolean=false;
  submitted:boolean=false;
  offres?:offres;
  employe?:employe;
  state:OffresState|null=null;
  readonly OffresStateEnum=OffresStateEnum;

  constructor(private activatedRoute: ActivatedRoute, 
    private router:Router, 
    private store:Store<any>,
    private formBuilder:FormBuilder) { 
    this.offreId=activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.store.dispatch(new EditOffresAction(this.offreId));
    this.store.subscribe(state=>{
      this.state=state.catalogState;
      if(this.state?.dataState==OffresStateEnum.LOADED){
        if(this.state.currentOffres!=null){
          this.offreFormGroup=this.formBuilder.group({
            id:[this.state.currentOffres.id,Validators.required],
            idd:[this.state.currentOffres.employe?.id,Validators.required],
            nom:[this.state.currentOffres.employe?.nom,Validators.required],
            prenom:[this.state.currentOffres.employe?.prenom,Validators.required],
            genre:[this.state.currentOffres.employe?.genre,Validators.required],
            adressMail:[this.state.currentOffres.employe?.adressMail,Validators.required],
            v_depart:[this.state.currentOffres.v_depart,Validators.required],
            v_arrive:[this.state.currentOffres.v_arrive,Validators.required],
            date:[this.state.currentOffres.date,Validators.required],
        });
        this.formBuit=true;
        }
      }
    });
  }
  onUpdateOffres(){
    this.submitted=true;
    if(this.offreFormGroup?.invalid) return;
    this.offres = new offres();
    this.offres.id = this.offreFormGroup?.value.id;
    this.offres.v_arrive= this.offreFormGroup?.value.v_arrive;
    this.offres.v_depart = this.offreFormGroup?.value.v_depart;
    this.offres.date = this.offreFormGroup?.value.date;
    this.employe = new employe();
    this.employe.id = this.offreFormGroup?.value.idd;
    this.employe.nom = this.offreFormGroup?.value.nom;
    this.employe.prenom = this.offreFormGroup?.value.prenom;
    this.employe.genre = this.offreFormGroup?.value.genre;
    this.employe.adressMail = this.offreFormGroup?.value.adressMail;
    this.offres.employe = this.employe;
    this.store.dispatch(new UpdateOffresAction(this.offres));
  }
  okUpdated(){
    this.router.navigateByUrl("/offres");
  }
}
