import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  user: User;
  userSubmitted: boolean;
  constructor(private fb: FormBuilder, private userService: UserServiceService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null,[Validators.required, Validators.minLength(8)]),
      mobile: new FormControl(null,[Validators.required, Validators.maxLength(10)])
    }, this.passwordMatchingValidator);
  }

  passwordMatchingValidator(fg: FormGroup): Validators{
    return fg.get('password').value === fg.get('confirmPassword').value ? null : {notmatched: true};
  }

  // Form Control getter methods

  get userName(){
     return this.registrationForm.get('userName') as FormControl;

  }

  get email(){
    return this.registrationForm.get('email') as FormControl;

  }

  get password(){
  return this.registrationForm.get('password') as FormControl;

  }

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;

  }

  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;

  }
  onSubmit(){
    console.log(this.registrationForm.value);

    this.userSubmitted = true;
    if(this.registrationForm.valid){
    // this.user = Object.assign(this.user, this.registrationForm.value);
    this.userService.addUser(this.userData());
    this.registrationForm.reset();
    this.userSubmitted = false;
    this.alertify.success('Registration is done successfully')

  }
    else{
      this.alertify.error('Registration failed. Please provide required fields');

    }
  }

  userData(): User{
    return this.user= {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }
}
