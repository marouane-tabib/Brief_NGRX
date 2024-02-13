import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {DemandActions} from '../state/demand.actions';
import { Observable } from 'rxjs';
import { Demand } from '../state/demand.interface';
import * as selectors from '../state/demand.selectors';
import {State} from '../state/demand.reducer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demands',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './demands.component.html',
  styleUrl: './demands.component.scss'
})
export class DemandsComponent implements OnInit {
  tasks: Observable<Demand[]> = this.store.select(selectors.selectTasks);

  constructor(private store: Store){

  }

  ngOnInit(): void {
    this.store.dispatch(DemandActions.loadDemands())
  }

}
