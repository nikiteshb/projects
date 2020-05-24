import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  User: any = [];
  currentPage = 1;
  itemsPerPage = 5;
  pageSize: number;
  
  constructor(
    public restApi: RestApiService
  ) { }

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage*(pageNum - 1);
    console.log(this.pageSize);
  }
  
  public changePagesize(num: number): void {
  this.itemsPerPage = this.pageSize + num;
}

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
