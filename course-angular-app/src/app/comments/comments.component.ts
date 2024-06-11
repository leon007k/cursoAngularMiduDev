import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: ` <h1>Los comentarios de lo que sea!</h1>
    <img
      src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-b7c50c845a78f5d7716475a92016d52655ba3115.jpg"
      alt="This is fine meme dog on fire in a room"
    />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
      blanditiis, qui, nihil nemo rem soluta suscipit, doloribus recusandae
      laboriosam modi debitis aliquam accusamus laudantium quod tempore. Modi
      culpa odit aperiam.
    </p>`,
  styles: `
  img {
    width: 100%;
    height: auto;
  }
  `,
})
export class CommentsComponent {}
