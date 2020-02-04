import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() posts = [
    {
    title: "Mon premier post",
    content: "hover styles here not present in the previous example. Also supported is the .active state; apply it to indicate an active selection on a contextual list group item",
    loveIts: 10,
    created_at: new Date()
    },
    {
    title: "Mon dexieme post",
    content: "hover styles here not present in the previous example. Also supported is the .active state; apply it to indicate an active selection on a contextual list group item",
    loveIts: 5,
    created_at: new Date()
    },
    {
    title: "Encore un post",
    content: "hover styles here not present in the previous example. Also supported is the .active state; apply it to indicate an active selection on a contextual list group item",
    loveIts: 0,
    created_at: new Date()
    }
  ];
  
}
