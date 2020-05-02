import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {
  successMsg: boolean = false;

  constructor(private fb: FormBuilder,
    public restApi: RestApiService, 
    public route: ActivatedRoute,
    public router: Router
    ) { }
  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    emailId: ['', Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),],
    contactNo: ['', Validators.required],
    message: ['']    
  });

  ngOnInit(): void {
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
    this.restApi.createLead(this.contactForm.value).subscribe((data: {}) => {
      this.successMsg= true;
    })
  }

}
