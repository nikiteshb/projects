import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {
  
  constructor(private fb: FormBuilder) { }
  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: [''],
    contactNo: [''],
    message: ['']    
  });

  ngOnInit(): void {
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
  }

}
