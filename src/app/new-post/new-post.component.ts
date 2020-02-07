import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  public postForm: FormGroup;

  

  constructor(private myService: PostService, private fb: FormBuilder) { }

  ngOnInit() {
    this.postsForm();
  }

  postsForm() {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      loveIts: ['0'],
      created_at: [new Date()]
    })
  }

  ResetForm() {
    this.postForm.reset();
  }

  submitPost() {
    this.myService.addPost(this.postForm.value);
    this.ResetForm();
  }
}
