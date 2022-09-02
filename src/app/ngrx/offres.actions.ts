import { Action } from "@ngrx/store";
import { offres } from "../model/model.offres";

export enum OffresActionsTypes{
  GET_ALL_OFFRES="[offres] GET All offres",
  GET_ALL_OFFRES_SUCCESS="[offres] GET All offres Success",
  GET_ALL_OFFRES_ERROR="[offres] GET All offres Error",

  SEARCH_OFFRES="[offres] SEARCH offres",
  SEARCH_OFFRES_SUCCESS="[offres] SEARCH offres Success",
  SEARCH_OFFRES_ERROR="[offres] SEARCH offres Error",

  DELETE_OFFRES="[offres] DELETE offres",
  DELETE_OFFRES_SUCCESS="[offres] DELETE offres Success",
  DELETE_OFFRES_ERROR="[offres] DELETE offres Error",

  New_OFFRES="[offres] New offres",
  New_OFFRES_SUCCESS="[offres] New offres Success",
  New_OFFRES_ERROR="[offres] New offres Error",

  EDIT_OFFRES="[offres] EDIT offres",
  EDIT_OFFRES_SUCCESS="[offres] EDIT offres Success",
  EDIT_OFFRES_ERROR="[offres] EDIT offres Error",

  SAVE_OFFRES="[offres] SAVE offres",
  SAVE_OFFRES_SUCCESS="[offres] SAVE offres Success",
  SAVE_OFFRES_ERROR="[offres] SAVE offres Error",

  UPDATE_OFFRES="[offres] UPDATE offres",
  UPDATE_OFFRES_SUCCESS="[offres] UPDATE offres Success",
  UPDATE_OFFRES_ERROR="[offres] UPDATE offres Error",
}

export class GetAllOffresAction implements Action{
  type: OffresActionsTypes = OffresActionsTypes.GET_ALL_OFFRES;
  constructor(public payload:any){}
}
export class GetAllOffresActionSuccess implements Action{
  type: OffresActionsTypes = OffresActionsTypes.GET_ALL_OFFRES_SUCCESS;
  constructor(public payload:offres[]){}
}
export class GetAllOffresActionError implements Action{
  type: OffresActionsTypes = OffresActionsTypes.GET_ALL_OFFRES_ERROR;
  constructor(public payload:String){}
}
/* */
export class SearchOffresAction implements Action{
  type: OffresActionsTypes = OffresActionsTypes.SEARCH_OFFRES;
  constructor(public payload:{mot:String,vDepart:String,vArrivee:String,date:Date}){}
}
export class SearchOffresActionSuccess implements Action{
  type: OffresActionsTypes = OffresActionsTypes.SEARCH_OFFRES_SUCCESS;
  constructor(public payload:offres[]){}
}
export class SearchOffresActionError implements Action{
  type: OffresActionsTypes = OffresActionsTypes.SEARCH_OFFRES_ERROR;
  constructor(public payload:String){}
}
/* */
export class DeleteOffresAction implements Action{
  type: OffresActionsTypes = OffresActionsTypes.DELETE_OFFRES;
  constructor(public payload:offres){}
}
export class DeleteOffresActionSuccess implements Action{
  type: OffresActionsTypes = OffresActionsTypes.DELETE_OFFRES_SUCCESS;
  constructor(public payload:offres){}
}
export class DeleteOffresActionError implements Action{
  type: OffresActionsTypes = OffresActionsTypes.DELETE_OFFRES_ERROR;
  constructor(public payload:String){}
}
/* */
export class NewOffresAction implements Action{
  type: OffresActionsTypes = OffresActionsTypes.New_OFFRES;
  constructor(public payload:any){}
}
export class NewOffresActionSuccess implements Action{
  type: OffresActionsTypes = OffresActionsTypes.New_OFFRES_SUCCESS;
  constructor(public payload:any){}
}
export class NewOffresActionError implements Action{
  type: OffresActionsTypes = OffresActionsTypes.New_OFFRES_ERROR;
  constructor(public payload:String){}
}
/* */
export class EditOffresAction implements Action{
  type: OffresActionsTypes = OffresActionsTypes.EDIT_OFFRES;
  constructor(public payload:number){}
}
export class EditOffresActionSuccess implements Action{
  type: OffresActionsTypes = OffresActionsTypes.EDIT_OFFRES_SUCCESS;
  constructor(public payload:offres){}
}
export class EditOffresActionError implements Action{
  type: OffresActionsTypes = OffresActionsTypes.EDIT_OFFRES_ERROR;
  constructor(public payload:String){}
}
/* */
export class SaveOffresAction implements Action{
  type: OffresActionsTypes = OffresActionsTypes.SAVE_OFFRES;
  constructor(public payload:offres){}
}
export class SaveOffresActionSuccess implements Action{
  type: OffresActionsTypes = OffresActionsTypes.SAVE_OFFRES_SUCCESS;
  constructor(public payload:offres){}
}
export class SaveOffresActionError implements Action{
  type: OffresActionsTypes = OffresActionsTypes.SAVE_OFFRES_ERROR;
  constructor(public payload:String){}
}
/* */
export class UpdateOffresAction implements Action{
  type: OffresActionsTypes = OffresActionsTypes.UPDATE_OFFRES;
  constructor(public payload:offres){}
}
export class UpdateOffresActionSuccess implements Action{
  type: OffresActionsTypes = OffresActionsTypes.UPDATE_OFFRES_SUCCESS;
  constructor(public payload:offres){}
}
export class UpdateOffresActionError implements Action{
  type: OffresActionsTypes = OffresActionsTypes.UPDATE_OFFRES_ERROR;
  constructor(public payload:String){}
}
export type OffresActions= GetAllOffresAction | GetAllOffresActionSuccess | GetAllOffresActionError
|  SearchOffresAction | SearchOffresActionSuccess | SearchOffresActionError
|  DeleteOffresAction | DeleteOffresActionSuccess | DeleteOffresActionError
|  NewOffresAction | NewOffresActionSuccess | NewOffresActionError
|  SaveOffresAction | SaveOffresActionSuccess | SaveOffresActionError
|  EditOffresAction | EditOffresActionSuccess | EditOffresActionError
|  UpdateOffresAction | UpdateOffresActionSuccess | UpdateOffresActionError ;
