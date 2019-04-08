/*Name : Rajandeep Kaur Dhaliwal
Student ID: 300926123
Date: April 08, 2017*/

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BasePageComponent } from "src/app/partials/base-page/base-page.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent extends BasePageComponent implements OnInit {
  constructor(route: ActivatedRoute) {
    super(route);
  }

  ngOnInit() {}
}
