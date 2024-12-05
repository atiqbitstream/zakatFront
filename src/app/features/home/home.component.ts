import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userRole:string | null=null;

  ngOnInit(): void {
    // this.userRole= this.homeService.getUserRole();
  }

  constructor(private homeService:HomeService)
  {
   
  }

 readonly moduleRoutes = [
    {path:'/users', label:'Go To users Module'},
    {path:'/admin',label:'Go To Admin Module'},
    {path:'', label:'Login Again'}
  ]

  

  onLogOut()
  {
    this.homeService.logOut();
  }
  

}
