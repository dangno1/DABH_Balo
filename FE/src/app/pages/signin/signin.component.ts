import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  user: IUser[] = [];

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.userService.getUser().subscribe((data) => {
      this.user = data;
      console.log(data);
    });
  }

  userForm = this.formBuilder.group({
    name: '',
    email: '',
    password: '',
    role: '2',
  });

  signin() {
    if (this.userForm.valid) {
      const userNew: IUser = {
        name: this.userForm.value.name || '',
        email: this.userForm.value.email || '',
        password: this.userForm.value.password || '',
        role: this.userForm.value.role || '2',
      };
      this.userService.getUserByEmail(userNew).subscribe((data) => {
        console.log(data);
        
        data.map((item) => {
          if (item.role == '1') {
            this.router.navigate(['/admin/productList']);
            // alert("admin")
          } else if(item.role == '2') {
            this.router.navigate(['']);
            // alert("user")
          }
        });
      });
    }
  }
}
