import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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
  contactForm: FormGroup;

  constructor(private fb: FormBuilder,
    public restApi: RestApiService, 
    public route: ActivatedRoute,
    public router: Router
    ) { }
    
  

  ngOnInit(){
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required,Validators.minLength(2)]],
      lastName: ['', [Validators.required,Validators.minLength(2)]],
      emailId: ['', [Validators.required, Validators.email]],
      contactNo: ['', [Validators.required,Validators.minLength(10)]],
      message: ['']    
    });
  }
  get contactFormControl() {
    return this.contactForm.controls;
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.isSubmitting = true;
    console.warn(this.contactForm.value);
    
    if (this.contactForm.invalid) {
      return;
    }

    this.restApi.createLead(this.contactForm.value).pipe(
      finalize(() => this.isSubmitting = false),
    ).subscribe((data: {}) => {
      this.successMsg= true;
    })
  }

}
