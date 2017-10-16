import { ConstantUtil } from './../../util/const.util';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../service/user.service';
import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'admin-home',
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent {
    userForm: FormGroup;
    private user: any;

    constructor(private fb: FormBuilder, private userService: UserService, private route: ActivatedRoute, private router: Router) {
        if(!localStorage.getItem(ConstantUtil.TOKEN_IS_LOGN)) 
        {
            this.router.navigateByUrl("/login");
        }
     }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            let username = params['username'];
            this.userForm = this.fb.group({
                username: [username, Validators.required],
                newPassword: ['', Validators.required],
                retypeNewPassword: ['', [Validators.required]]
            });
        });

    }

    onSubmit(form: FormGroup) {
        debugger;
        console.log('Valid?', form.valid); // true or false
        if(form.value.newPassword != '' && form.value.retypeNewPassword != '' && (form.value.newPassword == form.value.retypeNewPassword)) {
            this.userService.updatePassword(form.value.username, form.value.newPassword).subscribe(res => {
                if(res.json().status == 'success') {
                    alert('Update success');
                } 
            });
        } else {
            form.get('retypeNewPassword').setErrors( {MatchPassword: true} )
        }
    }

    logout() {
        localStorage.clear();
        this.router.navigateByUrl("/login");
    }
}
