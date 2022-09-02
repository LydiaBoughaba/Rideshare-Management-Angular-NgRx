import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { offres } from 'src/app/model/model.offres';
import { DeleteOffresAction } from 'src/app/ngrx/offres.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() offres:offres |null=null;
  constructor(private store:Store, private router:Router) { }

  ngOnInit(): void {
  }
  onDelete(o: offres){
    let conf = confirm("Voulez-vous vraiment supprimer cette offre?");
    if(conf==true){
      this.store.dispatch(new DeleteOffresAction(o))
    }
  }

  onEdit(o: offres){
    this.router.navigateByUrl("editoffre/"+o.id);
  }

}
