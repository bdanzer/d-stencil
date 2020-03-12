import { Component, h } from '@stencil/core';

@Component({
  tag: 'danzerpress-post-grid',
  styleUrl: 'danzerpress-post-grid.scss'
})
export class DanzerpressPostGrid {
  render() {
    return (
      <div class="row">
        <div class="col col-3">
          <h2>Categories</h2>
          <li class="active">
            <span>Category 1</span>
          </li>
          <li>
            <span>Category 2</span>
          </li>
        </div>
        <div class="col col-9">
          <div class="row">
            <div class="dp-col-2 card">
              <h2>Hello</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lectus sapien</p>
            </div>
            <div class="dp-col-4 card">
              <h2>Hello</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lectus sapien</p>
            </div>
            <div class="dp-col-4 card">
              <h2>Hello</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lectus sapien</p>
            </div>
            <div class="dp-col-4 card">
              <h2>Hello</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lectus sapien</p>
            </div>
            <div class="dp-col-2 card">
              <h2>Hello</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lectus sapien</p>
            </div>
            <div class="dp-col-4 card">
              <h2>Hello</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lectus sapien</p>
            </div>

            <div class="dp-col-4 card">
              <h2>Hello</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lectus sapien</p>
            </div>
            <div class="dp-col-4 card">
              <h2>Hello</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lectus sapien</p>
            </div>
            <div class="dp-col-2 card">
              <h2>Hello</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lectus sapien</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
