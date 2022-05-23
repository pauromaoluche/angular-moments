import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moments',
  templateUrl: './moments.component.html',
  styleUrls: ['./moments.component.scss']
})
export class MomentsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
