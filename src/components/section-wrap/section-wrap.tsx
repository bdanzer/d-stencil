import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'd-section',
  styleUrl: 'section-wrap.scss'
})
export class SectionWrap {
  @Prop() transparent: boolean = false;

  render() {
    return (
      <Host class={`d-section ${this.transparent && 'transparent'}`}>
        <div class="d-wrap">
          <slot/>
        </div>
      </Host>
    );
  }
}
