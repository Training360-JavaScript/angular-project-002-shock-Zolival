import { Component, EventEmitter, Injectable, Input } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'The good Angular programmer';


  @Input() phrase: EventEmitter<KeyboardEvent> = new EventEmitter();

  userList: User[] = this.userService.list;
  currentUser!: User;

  selectUser(user: User): void {
    this.currentUser = user;
  }

  updateUser(user: User): void {
    this.userService.updateUser(user);
  }

  removeUser(user: User): void {
    this.currentUser.removeUser(user);
  }

  onChangePhrase(phrase: KeyboardEvent) : void {
    console.log(phrase)
  }



  constructor(
    private userService: UserService
  ) {}

}
