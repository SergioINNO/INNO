import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

    constructor( public router: Router ) { }

    private add() {
      this.router.navigate(['home/user-add']);
    }

    private list() {
      this.router.navigate(['home/user-list']);
    }
}
