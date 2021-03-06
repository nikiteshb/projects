import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    location: ['', Validators.required],
  });

  name = new FormControl('');
  age = new FormControl('');
  location = new FormControl('');

  userDetails = { name: this.name.value, age: this.age.value, location: this.location.value }

  constructor(
    private fb: FormBuilder,
    public restApi: RestApiService, 
    // public router: Router,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() { }

  addUser() {
    this.restApi.createUser(this.userDetails).subscribe((data: {}) => {
      this.router.navigate(['list-user'])
    })
  }

}
