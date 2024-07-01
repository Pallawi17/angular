import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private dbService: DbService, private authService:AuthService) {}
  snippets: { id: string; title: string }[] = [];
  ngOnInit() {
    // const isAuthenticated = this.authService.isAuthenticated();
    // console.log(isAuthenticated);

    // if(isAuthenticated){
    //   this.dbService.getAllSnippets().then((items) => {
    //     this.snippets = items;
    //   });
    // }
  }

  ngAfterViewInit(){
   const isAuthenticated = this.authService.isAuthenticated();
   console.log(isAuthenticated);

   if (isAuthenticated) {
     this.dbService.getAllSnippets().then((items) => {
       this.snippets = items;
     });
   }
  }
}
