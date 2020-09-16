import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppStoreActions } from '../../../../../../src/app/store/app';
import { AppState } from '../../../../../../src/app/store/root-store.state';

@Component({
  selector: 'app-hfpmt2020',
  templateUrl: './hfpmt2020.component.html',
  styleUrls: ['./hfpmt2020.component.scss'],
})
export class Hfpmt2020Component implements OnInit, AfterViewInit {
  constructor(protected store: Store<AppState>) {}

  ngOnInit(): void {
    console.log('hfpmt2020 loaded');
  }

  ngAfterViewInit(): void {
    this.store.dispatch(AppStoreActions.stopLoading());
  }
}
