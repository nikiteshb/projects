import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RestApiService } from 'src/app/shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {
  successMsg: boolean = false;
  public isSubmitting = false

  constructor(private fb: FormBuilder,
    public restApi: RestApiService, 
    public route: ActivatedRoute,
    public router: Router
    ) { }
  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    emailId: ['', Validators.required],
    contactNo: ['', Validators.required],
    message: ['']    
  });

  ngOnInit(): void {
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.isSubmitting = true;
    console.warn(this.contactForm.value);
    this.restApi.createLead(this.contactForm.value).pipe(
      finalize(() => this.isSubmitting = false),
    ).subscribe((data: {}) => {
      this.successMsg= true;
    })
  }

}
