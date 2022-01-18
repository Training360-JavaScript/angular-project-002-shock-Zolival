import { Component, Injectable, Input } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable({
  providedIn: 'root',
})

export class AppComponent {

  @Input() users: User = new User();
  @Input() currentUser: User = new User();

  userSelect(): void {
    this.currentUser.emit()
  }

  updateUser(): void {
    this.updateUser();
  }

  removeUser(): void {
    this.removeUser();
  }


  title = 'The good Angular programmer';

  constructor() {}

}
