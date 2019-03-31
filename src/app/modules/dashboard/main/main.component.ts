import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private userservice: UserService) { }

  public get username(): string {
    return this.userservice.usernName;
  }

  ngOnInit() {
  }

}
