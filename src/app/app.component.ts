import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'hemlatha krishna shazia';
  dob:any=new Date().toTimeString();
  number_1:number=10;
  c:string="custom";
  address:any=signal('andhra');

  incrementData():any{
    // alert("goodmorning");
    this.number_1+=1;

  }
  changeAddress():any{
    this.address.set("India");
  }

}
