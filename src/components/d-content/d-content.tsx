import { Component, h } from '@stencil/core';

@Component({
  tag: 'd-content',
  styleUrl: 'd-content.scss'
})
export class DContent {
  render() {
    return (
      <div class="danzerpress-two-thirds danzerpress-col-center danzerpress-align-center danzerpress-hero-normal">
        {/* {% include 'dp-sections/section-parts/section_icon.twig' %} */}
        <div class="danzerpress-section-content {{ layout.text_align }}">
          <h2 style={{color: "white", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "0"}}>Hello There!</h2>
          <p style={{color: "white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla lectus sapien, vitae tempor orci sollicitudin eget. Vivamus eleifend gravida lectus, sit amet auctor justo pharetra in. Praesent eleifend tempus tincidunt. Etiam vel magna maximus, sagittis felis eu, pharetra justo. Ut sit amet congue lacus. </p>
            {/* {% include 'dp-sections/section-parts/content.twig' %}
            {% include 'dp-sections/section-parts/content-buttons.twig' %} */}
          <d-button style={{marginRight: "15px"}}>Left Button</d-button>
          <d-button secondary={true}>Right Button</d-button>
        </div>
      </div>
    );
  }
}
