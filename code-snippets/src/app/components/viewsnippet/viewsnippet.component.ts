import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-viewsnippet',
  standalone: true,
  imports: [],
  templateUrl: './viewsnippet.component.html',
  styleUrl: './viewsnippet.component.css',
})
export class ViewsnippetComponent {
  constructor(private route: ActivatedRoute, private dbService: DbService) {}
  codeSnippet = {title: '', snippet: ''}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    const snippetId = params.get('id');
    if (snippetId) {
      this.dbService
        .getSnippetById(snippetId)
        .then((data: any) => {
          this.codeSnippet = data;
          console.log(this.codeSnippet);
        })
        .catch((error: any) => {
          console.error('Error fetching snippet:', error);
        });
    }
  });}
}
