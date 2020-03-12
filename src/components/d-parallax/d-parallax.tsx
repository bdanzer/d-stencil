import { Component, h, Listen, Element, State, Prop } from '@stencil/core';

@Component({
  tag: 'd-parallax',
  styleUrl: 'd-parallax.scss'
})
export class DParallax {
  @Element() el: HTMLElement;

  @Prop() imgSrc: string;

  @State() offsetY: number = 0;

  lastKnownYScroll = 0;
  ticking = false;

  @Listen('scroll', { target: 'window' })
  scrollListener(_e) {
    if( this.ticking ) {
      return
    }
    
    window.requestAnimationFrame(() => {
      if (window.scrollY > this.el.offsetTop && window.scrollY < this.el.offsetHeight + this.el.offsetTop) {
        this.ticking = true;
        this.offsetY = (window.scrollY - this.el.offsetTop) * .2;
        this.ticking = false;
      } else {
        this.offsetY = 0;
      }
    });
  }

  render() {
    return (
      <div class="d-parallax" style={{padding: '140px 0'}}>
        <div class="d-parallax-img-wrap">
          <img style={{transform: `translateY(${this.offsetY}px)`}} src={this.imgSrc}></img>
        </div>
        <div class="d-parallax-content">
          <slot />
        </div>
      </div>
    );
  }
}
