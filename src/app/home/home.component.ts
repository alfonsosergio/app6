import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { ServicesService } from '../config/services.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  
  constructor(private router: Router, private ServicesSer: ServicesService) { }

  ngOnInit(): void {
    this.cargarData();
  }

 public cargarData(){
   this.ServicesSer.get('https://jsonplaceholder.typicode.com/posts')
   .subscribe(respuesta =>{
     console.log(respuesta);
   })
 }

}
