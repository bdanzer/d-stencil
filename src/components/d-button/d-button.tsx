import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'd-button',
  styleUrl: 'd-button.scss'
})
export class DButton {
  @Prop() secondary: boolean;

  render() {
    return (
      <div class={`d-button ${this.secondary && 'd-secondary'}`}>
        <slot />
      </div>
    );
  }
}
