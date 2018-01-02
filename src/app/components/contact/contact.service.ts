import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';

@Injectable()
export class ContactService {

  constructor(private http:Http) {



   }


  sendEmail(dataEmail) {
    console.log(dataEmail)
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });  
    this.http.post('http://localhost:3000/sendmail', dataEmail,options).subscribe((data) => {
          console.log(data)
            console.log('the email is sended')
        })
      }  
}
