import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ToolbarModule,AvatarModule,SplitButtonModule, InputTextModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {

    constructor(private router:Router){}

  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Sing Up',
                icon: 'pi pi-refresh',
                routerLink: ['/register']
                
            },
            {
                label: 'Logout',
                icon: 'pi pi-times',
                command: () => {
                    this.loggOut();
                }
            }
        ];
    }


    loggOut(){
        sessionStorage.clear();
        this.router.navigate(['/login']);
    
    }
}
