/*Name : Rajandeep Kaur Dhaliwal
Student ID: 300926123
Date: April 08, 2017*/

import { Component, OnInit } from "@angular/core";
import { BasePageComponent } from "src/app/partials/base-page/base-page.component";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-contact-me",
  templateUrl: "./contact-me.component.html",
  styleUrls: ["./contact-me.component.css"]
})
export class ContactMeComponent extends BasePageComponent implements OnInit {
  constructor(route: ActivatedRoute, private authService: AuthService) {
    super(route);
  }

  ngOnInit() {}

  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }
}
