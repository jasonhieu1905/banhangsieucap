import { UserService } from './../../service/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private username: string;
  private password: string;
  private errorMessage: string;
  constructor(private userService: UserService, private router: Router) {

  }
  ngOnInit() {

  }

  login() {
    let t = this;
    this.userService.login(this.username, this.password).subscribe(res => {
      if(res.json().length === 0) {
        this.errorMessage = 'Username or password is incorrect';
        return ;
      }
      let user = {username: this.username, password: this.password};
      this.router.navigate(['admin/home'],  { queryParams: user});
    }, err => {
      this.errorMessage = 'Username or password is incorrect';
      console.log('error while doing login');
    });
  }
}
