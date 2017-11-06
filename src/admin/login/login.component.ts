import { MetaService } from '@ngx-meta/core';
import { ConstantUtil } from './../../util/const.util';
import { UserService } from './../../service/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username: string;
  public password: string;
  public errorMessage: string;
  constructor(private userService: UserService, private router: Router,
    private meta: Meta) {
      const url: MetaDefinition   =  { name: 'og:url', content: 'http://bideptrai.com/category/2' };
      const title: MetaDefinition   =  { name: 'og:title', content: 'abcd' };
      const description: MetaDefinition   =  { name: 'og:description', content: 'description' };
      const image: MetaDefinition   =  { name: 'og:image', content: 'http://bideptrai.com/assets/images/category/No4-01.jpg' };
      const width: MetaDefinition   =  { name: 'og:image:width', content: '400' };
      const height: MetaDefinition   =  { name: 'og:image:height', content: '280' };
      this.meta.addTag(url, true);
      this.meta.addTag(title, true);
      this.meta.addTag(description, true);
      this.meta.addTag(image, true);
      this.meta.addTag(width, true);
      this.meta.addTag(height, true);
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
      let user = {username: this.username};
      localStorage.setItem(ConstantUtil.TOKEN_IS_LOGN,'true');
      this.router.navigate(['admin'],  { queryParams: user});
    }, err => {
      this.errorMessage = 'Username or password is incorrect';
      console.log('error while doing login');
    });
  }
}
