import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Lead } from '../shared/lead';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  // Define API
  apiURL = 'http://localhost:3000';
  // apiURL = 'https://apinikitesh.herokuapp.com';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }  
  httpOptions = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
    }), 
    responseType: 'text' as 'json' };
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  // HttpClient API get() method => Fetch users list
  getUsers(): Observable<User> {
    return this.http.get<User>(this.apiURL + '/users')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch user
  getUser(id): Observable<User> {
    return this.http.get<User>(this.apiURL + '/users/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create user
  createUser(users): Observable<User> {
    return this.http.post<User>(this.apiURL + '/users/', JSON.stringify(users), this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
  }  

    // HttpClient API post() method => Create user
    createLead(contactLeads): Observable<Lead> {
      return this.http.post<Lead>(this.apiURL + '/contactleads/', JSON.stringify(contactLeads), this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
    }  

  // HttpClient API put() method => Update user
  
  updateUser(id, user): Observable<User> {
    console.log('restapi--------',user);
    let newUser = {
      name: user['name'],
      age: user['age'],
      location: user['location']
    }
console.log('newUser-----',newUser)
    return this.http.put<User>(this.apiURL + '/users/' + id, JSON.stringify(newUser), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete user
  deleteUser(id){
    return this.http.delete<User>(this.apiURL + '/users/' + id, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
