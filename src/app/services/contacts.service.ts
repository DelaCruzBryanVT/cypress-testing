import {Headers, Http, RequestOptions} from "@angular/http";
import { Injectable } from "@angular/core";
import * as globalVariables from '../../environments/global-variables';


@Injectable()
export class ContactService {

    URL:string  = globalVariables.URL_BACKEND;

    headers = new Headers({'Content-Type': 'application/json' });
    options = new RequestOptions({headers:this.headers});

    constructor(private http:Http){}

    listOfContacts(){
        return  this.http.get(this.URL)
    }

    showContact(id:number){
        let showURL = this.URL+'/'+id;
        return this.http.get(showURL)
            .toPromise().then(resp => resp.json().contact );
    }

    storeContact(contact:any){
        let body = JSON.stringify(contact);
        return this.http.post(this.URL, body,this.options)
            .toPromise()
            .then(resp => resp.json())
            .catch(this.ocurredAnError);
    }

    updateContact(contact:any, id:any){
        let updateURL = this.URL+'/'+id;
        let body = JSON.stringify(contact);
        return this.http.put(updateURL, body,this.options)
            .toPromise()
            .then(resp => resp.json())
            .catch(this.ocurredAnError);
    }

    deleteContact(id:any){
        let deleteURL = this.URL+'/'+id;
        return this.http.delete(deleteURL)
            .toPromise()
            .then(resp => resp.json())
            .catch(this.ocurredAnError);
    }


    private ocurredAnError(error:any){
        console.log('Ocurrio un error en el llamado HTTP ', error.message);
        return Promise.reject(error.message || error);

    }

}