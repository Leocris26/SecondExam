import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onButtonClick1() {
    this.router.navigateByUrl('/page1');
  }

  onButtonClick2() {
    this.router.navigateByUrl('/page2');
  }

}
