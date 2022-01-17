import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-service',
  templateUrl: './user-service.component.html',
  styleUrls: ['./user-service.component.scss']
})
export class UserServiceComponent implements OnInit {
  currentUser: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

}
