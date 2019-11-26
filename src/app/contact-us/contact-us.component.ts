import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from './../posts.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  enteredName = '';
  enteredEmail = '';
  enteredTelephone = '';
  enteredContent = '';

  constructor(public postsService: PostService) { }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.name, form.value.telephone, form.value.email, form.value.content);
    form.resetForm();
  }

  ngOnInit() {
  }

}