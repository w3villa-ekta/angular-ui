import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  name: string = "Test";
  first_name: string;
  last_name: string;
  e_mail: string;
  password: string;
 



  constructor() { }

  ngOnInit() {
  }
  myClickFunction(data){
  //  this.e_mail = this.data.name;
    console.log(this.name)
  }
}
