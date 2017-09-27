import { RequestUtil } from './../../util/request.util';
import { ActivatedRoute } from '@angular/router';
import { ContactModel } from './contact.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from './../../service/contact.service';
import { Component } from '@angular/core';

@Component({
    selector: 'contact-admin',
    templateUrl: './contact-admin.component.html',
    styleUrls: ['./contact-admin.component.scss']
})
export class ContactAdminComponent {
    private contact: any;
    public contactForm: FormGroup;
    private errorMessage = '';
    constructor(private contactService : ContactService, private fb: FormBuilder){
    }

    ngOnInit(){
        
        this.contactService.getAllContact().subscribe(res => {
            this.contact = new ContactModel(res.json()[0]);
            this.contactForm = this.fb.group({
                id: [this.contact.id],
                title1: [this.contact.title1, Validators.required],
                introduction1: [this.contact.introduction1, Validators.required],
                introduction2: [this.contact.introduction2, Validators.required],
                slogan: [this.contact.slogan, Validators.required],
                phone1: [this.contact.phone1, Validators.required],
                phone2: [this.contact.phone2, Validators.required],
                email: [this.contact.email, Validators.required]
            });
        }, err => {
            console.log('error when getting contact ' + err);
        });
    }

    onSubmit(form: FormGroup) {
        if(!form.valid) {
            this.errorMessage = 'Can not submit form';
            return ;
        }
        this.errorMessage = '';
        let params = RequestUtil.getUrlSearchParam(form.value);
        this.contactService.updateContact(params.toString()).subscribe(res => {
            if(res.json().status == 'success') {
                alert('Update success');
            } else {
                this.errorMessage = 'Can not update';
            }
            console.log(res);
        });
        
    }
}
        