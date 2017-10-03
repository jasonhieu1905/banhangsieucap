import { ActivatedRoute } from '@angular/router';
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

    constructor(private fb: FormBuilder, private userService: UserService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe(res => {
            this.userForm = this.fb.group({
                username: [res.username, Validators.required],
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
}
