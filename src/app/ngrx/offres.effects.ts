import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { offresService } from "../services/services.offres";
import { DeleteOffresActionError, DeleteOffresActionSuccess, EditOffresAction, EditOffresActionError, EditOffresActionSuccess, GetAllOffresActionError, GetAllOffresActionSuccess, NewOffresActionSuccess, OffresActions, OffresActionsTypes, SaveOffresActionError, SaveOffresActionSuccess, SearchOffresActionError, SearchOffresActionSuccess, UpdateOffresActionError, UpdateOffresActionSuccess } from "./offres.actions";
import { catchError, map, mergeMap } from "rxjs/operators";

@Injectable()
export class offresEffects{
  constructor(private offresService: offresService, private effectAction:Actions){}

  getAllOffresEffect:Observable<OffresActions>=createEffect(
    ()=> this.effectAction.pipe(
        ofType(OffresActionsTypes.GET_ALL_OFFRES),
        mergeMap((action:OffresActions)=>{
          return this.offresService.getAllOffres().pipe(
            map((offres)=> new GetAllOffresActionSuccess(offres)),
            catchError((err)=>of(new GetAllOffresActionError(err.message)))
          )
        })
      )
  );
  /**/
  searchOffresEffect:Observable<OffresActions>=createEffect(
    ()=> this.effectAction.pipe(
        ofType(OffresActionsTypes.SEARCH_OFFRES),
        mergeMap((action:OffresActions)=>{
          return this.offresService.chercherOffres(action.payload.mot,action.payload.vDepart,action.payload.vArrivee,
            action.payload.date).pipe(
            map((offres)=> new SearchOffresActionSuccess(offres)),
            catchError((err)=>of(new SearchOffresActionError(err.message)))
          )
        })
      )
  );
  /**/
  deleteOffresEffect:Observable<OffresActions>=createEffect(
    ()=> this.effectAction.pipe(
        ofType(OffresActionsTypes.DELETE_OFFRES),
        mergeMap((action:OffresActions)=>{
          return this.offresService.deleteOffres(action.payload).pipe(
            map(()=> new DeleteOffresActionSuccess(action.payload)),
            catchError((err)=>of(new DeleteOffresActionError(err.message)))
          )
        })
      )
  );
  /**/
  newOffresEffect:Observable<OffresActions>=createEffect(
    ()=> this.effectAction.pipe(
        ofType(OffresActionsTypes.New_OFFRES),
        map((action:OffresActions)=>{
          return new NewOffresActionSuccess({});
        })
      )
  );
  /**/
  saveOffresEffect:Observable<OffresActions>=createEffect(
    ()=> this.effectAction.pipe(
        ofType(OffresActionsTypes.SAVE_OFFRES),
        mergeMap((action:OffresActions)=>{
          return this.offresService.saveOffre(action.payload).pipe(
            map((offres)=> new SaveOffresActionSuccess(offres)),
            catchError((err)=>of(new SaveOffresActionError(err.message)))
          )
        })
      )
  );
  /**/
  editOffresEffect:Observable<OffresActions>=createEffect(
    ()=> this.effectAction.pipe(
        ofType(OffresActionsTypes.EDIT_OFFRES),
        mergeMap((action:OffresActions)=>{
          return this.offresService.chercherOffresId(action.payload).pipe(
            map((offres)=> new EditOffresActionSuccess(offres)),
            catchError((err)=>of(new EditOffresActionError(err.message)))
          )
        })
      )
  );
  /**/
  updateOffresEffect:Observable<OffresActions>=createEffect(
    ()=> this.effectAction.pipe(
        ofType(OffresActionsTypes.UPDATE_OFFRES),
        mergeMap((action:OffresActions)=>{
          return this.offresService.updateOffre(action.payload).pipe(
            map((offres)=> new UpdateOffresActionSuccess(offres)),
            catchError((err)=>of(new UpdateOffresActionError(err.message)))
          )
        })
      )
  );
}