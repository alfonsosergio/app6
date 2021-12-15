import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  usuario = new FormControl();
  password = new FormControl();
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  Login(){
    console.log(this.usuario.value);
    console.log(this.password.value);
    if (this.usuario.value == 'usuario' &&
		this.password.value == '12345') {
      this.router.navigate(['/home1']);
	}
    
  }

}
