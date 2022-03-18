import { ContactInterface } from './contact-model-interface';

export class ContactClass implements ContactInterface {
    id= 0;
    name = "";
    lastName = "";
    email = "";
    phone = "";
    gender = "";
    date = "";

    constructor(){}
}