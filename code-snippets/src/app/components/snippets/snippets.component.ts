 import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Snippets } from '../../../models/snippet';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-snippets',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './snippets.component.html',
  styleUrl: './snippets.component.css',
})
export class SnippetsComponent {
  constructor(private dbService: DbService) {}

  title = new FormControl('', [Validators.required]);

  snippet = new FormControl('', [Validators.required]);

  snippetsForm = new FormGroup({
    title: this.title,
    snippet: this.snippet,
  });

  createSnippet() {
    this.dbService.createSnippet(this.snippetsForm.value as Snippets);
  }
}
