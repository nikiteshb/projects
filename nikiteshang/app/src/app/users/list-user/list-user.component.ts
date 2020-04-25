import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  User: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit(): void {
    this.loadUsers()
  }
  loadUsers() {
    return this.restApi.getUsers().subscribe((data: {}) => {
      this.User = data;
    })
  }

    // Delete employee
    deleteUser(id) {
      if (window.confirm('Are you sure, you want to delete?')){
        this.restApi.deleteUser(id).subscribe(data => {
          this.loadUsers()
        })
      }
    }  

}
