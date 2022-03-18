import { ContactClass } from './../../models/contact-model-class';
import { ContactService } from './../../services/contacts.service';
import { Observable } from 'rxjs';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './contacts.component.html',
    styles: [` 
    .my-custom-scrollbar {
        position: relative;
        height: 400px;
        overflow: auto;
      }
      .table-wrapper-scroll-y {
        display: block;
      }`
    ]
})

export class ContactsComponent implements OnInit {
    formContact!: FormGroup;
    contacts!: ContactClass[];
    contact: ContactClass;
    response: Object;
    status: string;
    currentId: number;
    search: string;
    range: string;

    position: number =1;


    constructor(private _contactService: ContactService) {
      
        this.contact = new ContactClass();
        this.response = {};
        this.status = '';
        this.currentId = 0;
        this.search = '';
        this.range = '5';

    }

    ngOnInit() {
        this.listOfContacts();
        this.initForm();
    }

    listOfContacts() {
        this._contactService.listOfContacts()
            .subscribe(resp => this.contacts = resp.json().contacts,
                error => console.error(`Error: ${error}`));

        setTimeout(() => this.response = {}, 2000);
    }


    showContact(status: string, id?: number) {
        this.status = status;

        if (status == 'save') {
            this.currentId = 0;
            this.formContact.reset();
        }

        if (id) {
            this.currentId = id;
            this._contactService.showContact(id)
                .then(contact => this.contact = contact,
                    error => console.error(`Error: ${error}`))
        }
    }

    addOrEditContact() {

        let contactData = {
            name: this.formContact.value.name,
            lastName: this.formContact.value.lastName,
            email: this.formContact.value.email,
            phone: this.formContact.value.phone,
            gender: this.formContact.value.gender,
            date: this.formContact.value.date,
        }

        localStorage.setItem('contactData', JSON.stringify(contactData));

        if (this.currentId) {
            this._contactService.updateContact(contactData, this.currentId)
                .then(resp => {
                    this.listOfContacts();
                    this.response = resp;
                });

        } else {
            this._contactService.storeContact(contactData)
                .then(resp => {
                    this.listOfContacts();
                    this.response = resp;
                });
        }

        this.showContact('');
    }




    editContact(id: number) {
        this.showContact('edit');
        this.currentId = id;
        this._contactService.showContact(id)
            .then(contact => this.formContact.patchValue(contact),
                error => console.error(`Error: ${error}`))
    }


    deleteContact(id: number) {
        this._contactService.deleteContact(id)
            .then(resp => {
                this.listOfContacts();
                this.response = resp;
            });
    }

    setPosition(position: number){
        this.position = position;
    }

    private initForm() {

        this.formContact = new FormGroup({
            name: new FormControl('', [
                Validators.required,
                Validators.pattern("^.{4,}$")
            ]),
            lastName: new FormControl('', [
                Validators.required,
                Validators.pattern("^.{4,}$")
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.pattern("[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?")
            ]),
            phone: new FormControl('', [
                Validators.pattern("[0-9]{10}")
            ]),
            gender: new FormControl(''),
            date: new FormControl(''),
            file: new FormControl(''),
            range: new FormControl(''),
            radios: new FormControl('', [Validators.required]),
            checkbox1: new FormControl('', [Validators.required]),
        });
    }
}