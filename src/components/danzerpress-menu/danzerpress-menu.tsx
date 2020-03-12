import { Component, h, Host, State, Prop, Listen, Element } from '@stencil/core';

@Component({
  tag: 'danzerpress-menu',
  styleUrl: 'danzerpress-menu.scss'
})
export class DanzerpressMenu {
  @Prop() isTransparent: boolean = false;
  @Prop() logoLink: string = '/';

  @State() transparent: boolean = false;
  @State() isHammy: boolean = false;

  @Element() el: HTMLElement;

  componentDidLoad() {
    this.init();
  }

  init() {
    this.transparent = this.isTransparent;
    console.log(this.el);
  }

  @Listen('scroll', { target: 'window' })
  handleScroll(ev) {
    if (this.isTransparent) {
      this.transparent = (ev.currentTarget.scrollY > this.el.offsetTop);
    }
  }

  hamburgler() {
    this.isHammy = !this.isHammy;
  }

  render() {
    return (
      <Host class={`${(this.transparent) ? 'is-trans' : 'non-trans'} ${this.isHammy ? 'is-hammed' : 'not-hammed'}`}>
        <div class="danzerpress-menu-wrap">
          <div class="dp-logo-wrap">
            <a href={this.logoLink}>
              <img src="https://danzerpress.com/wp-content/uploads/2018/01/danzerpressofficial-e1516152155615.png"/>
            </a>
          </div>
          <button class={`danzerpress-hamburger hamburger hamburger--collapse ${this.isHammy ? 'is-active' : 'not-active'}`} type="button" aria-label="Menu" aria-controls="navigation" onClick={this.hamburgler.bind(this)}>
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
          {/* <slot name="dp-menu-items" /> */}
          <div class="dp-menu-items-wrap">
            <ul>
              <li class="dp-menu-item has-children">
                <a href="https://google.com">Menu Item 1</a>
                <div class="submenu">
                  <ul>
                    <li><a href="https://google.com">Submenu Item 1</a></li>
                    <li><a href="">Submenu Item 2</a></li>
                    <li><a href="">Submenu Item 3</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="">Menu Item 2</a></li>
              <li><a href="">Menu Item 3</a></li>
            </ul>
          </div>
        </div>
      </Host>
    );
  }
}
