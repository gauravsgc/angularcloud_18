import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,SidebarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'hemlatha krishna shazia';
  dob:any=new Date().toTimeString();
  number_1:number=10;
  c:string="custom";
  address:any=signal('andhra');

  number_2:number=100;

  day:number=4;

  names:string[]=['shazia','hemlatha','krishna'];

employeedetails=[
  {empId:101,name:'shazia',designation:'angular devloper'},
  {empId:102,name:'hemlatha',designation:'node devloper'},
  {empId:103,name:'krishna',designation:'full stack devloper'}
]

  incrementData():any{
    // alert("goodmorning");
    this.number_1+=1;

  }
  changeAddress():any{
    this.address.set("India");
  }

}
