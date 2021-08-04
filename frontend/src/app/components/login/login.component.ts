import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../interfaces/credentials.interface';
import AuthService from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
username: string = '';
password: string = '';


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  //two way binding of username and input username
  onKeyUsername(event: any) {
    this.username = event.target.value;
  }

  //two way binding of password and input password
  onKeyPassword(event: any) {
    this.password = event.target.value;
  }

  chekCredentials = () => {
    // If password or username are empty
    if (!this.username || !this.password)
      return;
    const cred = this.authService.getCredentialsByUsername(this.username)
      // .subscribe((data: Credentials) => {
      //   console.log(data)
      //   if (data.username == this.username && data.password == this.password)
      //     alert("Welcome " + this.username);
      //   else
      //     alert ("Wrong");
      // });
  }
}
