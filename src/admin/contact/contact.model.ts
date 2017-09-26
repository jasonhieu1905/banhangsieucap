export class ContactModel{
    id: number;
    title1: string;
    introduction1: string;
    introduction2: string;
    slogan: string;
    phone1: string;
    phone2: string;
    email: string;

    constructor(data){
        this.id = data.id;
        this.title1 = data.title1;
        this.introduction1 = data.introduction1;
        this.introduction2 = data.introduction2;
        this.slogan = data.slogan;
        this.phone1 = data.phone1;
        this.phone2 = data.phone2;
        this.email = data.email;
    }
}