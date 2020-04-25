import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  id = this.actRoute.snapshot.params['id']; 
  user: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(){
    this.restApi.getUser(this.id).subscribe((data: {}) => {
      console.log('thissssss user', data);
      this.user = data[0];
      
    })
  }
  updateUser() {
    console.log(this.id);
    console.log(this.user);
    this.restApi.updateUser(this.id, this.user).subscribe(data => {
      this.user = data;
      console.log("edit0user",this.user);
      this.router.navigate(['/list-user'])
    })
  }

}
