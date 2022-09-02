import { Action } from "@ngrx/store";
import { offres } from "../model/model.offres";
import { DeleteOffresAction, OffresActions, OffresActionsTypes } from "./offres.actions";
export enum OffresStateEnum{
  LOADING ="Loading",
  LOADED ="Loaded",
  ERROR="Error",
  INITIAL="Initial",
  NEW="New",
  EDIT="Edit",
  UPDATED="Updated",
}
export interface OffresState{
  offres: offres[], //une liste d'offres qui va s'afficher
  errorMessage:string, //une varible pour stocker l'erreur si on a un msg d'erreur
  dataState: OffresStateEnum, //indiquer l'etat du State
  currentOffres:offres|null
}
//initialiser le premier état
const initState:OffresState={
  offres:[],
  errorMessage:"",
  dataState:OffresStateEnum.INITIAL,
  currentOffres:null
}
export function offresReducer(state=initState, action:Action):OffresState{
  switch(action.type){
    case OffresActionsTypes.GET_ALL_OFFRES:
      return{...state, dataState:OffresStateEnum.LOADING}
    case OffresActionsTypes.GET_ALL_OFFRES_SUCCESS:
      return{...state, dataState:OffresStateEnum.LOADED, offres:(<OffresActions>action).payload}
    case OffresActionsTypes.GET_ALL_OFFRES_ERROR:
      return{...state, dataState:OffresStateEnum.ERROR, errorMessage:(<OffresActions>action).payload}
    /**/ 
    case OffresActionsTypes.SEARCH_OFFRES:
      return{...state, dataState:OffresStateEnum.LOADING}
    case OffresActionsTypes.SEARCH_OFFRES_SUCCESS:
      return{...state, dataState:OffresStateEnum.LOADED, offres:(<OffresActions>action).payload}
    case OffresActionsTypes.SEARCH_OFFRES_ERROR:
        return{...state, dataState:OffresStateEnum.ERROR, errorMessage:(<OffresActions>action).payload}
    /**/ 
    case OffresActionsTypes.DELETE_OFFRES:
      return{...state, dataState:OffresStateEnum.LOADING}
    case OffresActionsTypes.DELETE_OFFRES_SUCCESS:
      let o:offres= (<DeleteOffresAction>action).payload;
      let index=state.offres.indexOf(o);
      let offresliste=[...state.offres];
      offresliste.splice(index,1);
      return{...state, dataState:OffresStateEnum.LOADED, offres:offresliste}
    case OffresActionsTypes.DELETE_OFFRES_ERROR:
      return{...state, dataState:OffresStateEnum.ERROR, errorMessage:(<OffresActions>action).payload}
    /**/ 
    case OffresActionsTypes.New_OFFRES:
      return{...state, dataState:OffresStateEnum.LOADING}
    case OffresActionsTypes.New_OFFRES_SUCCESS:
      return{...state, dataState:OffresStateEnum.NEW}
    case OffresActionsTypes.New_OFFRES_ERROR:
      return{...state, dataState:OffresStateEnum.ERROR, errorMessage:(<OffresActions>action).payload}
      /**/ 
    case OffresActionsTypes.SAVE_OFFRES:
      return{...state, dataState:OffresStateEnum.LOADING}
    case OffresActionsTypes.SAVE_OFFRES_SUCCESS:
       let offres:offres[]=[...state.offres];
       offres.push((<OffresActions>action).payload);
      return{...state, dataState:OffresStateEnum.LOADED, offres:offres}
    case OffresActionsTypes.SAVE_OFFRES_ERROR:
      return{...state, dataState:OffresStateEnum.ERROR, errorMessage:(<OffresActions>action).payload}
      /**/ 
    case OffresActionsTypes.EDIT_OFFRES:
      return{...state, dataState:OffresStateEnum.LOADING}
    case OffresActionsTypes.EDIT_OFFRES_SUCCESS:
      return{...state, dataState:OffresStateEnum.LOADED, currentOffres:(<OffresActions>action).payload}
    case OffresActionsTypes.EDIT_OFFRES_ERROR:
      return{...state, dataState:OffresStateEnum.ERROR, errorMessage:(<OffresActions>action).payload}
      /**/ 
    case OffresActionsTypes.UPDATE_OFFRES:
      return{...state, dataState:OffresStateEnum.LOADING}
    case OffresActionsTypes.UPDATE_OFFRES_SUCCESS:
      let updateOffre:offres=(<OffresActions>action).payload;
      let offresu:offres[]=state.offres.map(o=>(o.id==updateOffre.id)?updateOffre:o);
      return{...state, dataState:OffresStateEnum.UPDATED, offres:offresu}
    case OffresActionsTypes.UPDATE_OFFRES_ERROR:
      return{...state, dataState:OffresStateEnum.ERROR, errorMessage:(<OffresActions>action).payload}
    default : return{...state}
  }
}