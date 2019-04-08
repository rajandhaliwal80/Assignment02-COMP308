/*Name : Rajandeep Kaur Dhaliwal
Student ID: 300926123
Date: April 08, 2017*/

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BasePageComponent } from "src/app/partials/base-page/base-page.component";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"]
})
export class ServicesComponent extends BasePageComponent implements OnInit {
  constructor(route: ActivatedRoute) {
    super(route);
  }

  ngOnInit() {}
}
