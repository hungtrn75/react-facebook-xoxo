import Link from 'gatsby-link'
import React, { Component } from 'react';
import lottie from 'lottie-web';
import path from 'path';
import animation1 from '../../animations/like.json';
import animation2 from '../../animations/dino_dance.json';
import animation3 from '../../animations/confetti.json';
import animation4 from '../../animations/loading.json';
import animation5 from '../../animations/progress_bar.json';
import animation6 from '../../animations/splashy_loader.json';
import animation7 from '../../animations/trail_loading.json';
import animation8 from '../../animations/newAnimation.json';
import animation9 from '../../animations/dna_like_loader.json';
import animation10 from '../../animations/funky_chicken.json';
import animation11 from '../../animations/super_fast_tech_support.json';
import animation13 from '../../animations/simple.json';

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      animationData: null,
      animation: {
        '1': animation1,
        '2': animation2,
        '3': animation3,
        '4': animation4,
        '5': animation5,
        '6': animation6,
        '7': animation7,
        '8': animation8,
        '9': animation9,
        '10': animation10,
        '11': animation11,
        '13': animation13,
      }
    }
  }

  componentDidUpdate() {
    if (this._el) {
      lottie.loadAnimation({
        container: this._el,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: this.state.animationData
      })
    }
  }
  _click = (e) => {
    let target = e.target;

    let value = target.getAttribute('value');
    this.setState({ show: !this.state.show, animationData: this.state.animation[`${value}`] });
    setTimeout(() => this.setState({ show: false }), 4000);
  }
  render() {
    return (
      <div>
        <h1>Facebook xoxo</h1>
        <div className="animation" onClick={this._click} value="1" ref="animation">like</div>
        <div className="animation" onClick={this._click} value="2" ref="animation">dino_dance</div>
        <div className="animation" onClick={this._click} value="3" ref="animation">confetti</div>
        <div className="animation" onClick={this._click} value="4" ref="animation">loading</div>
        <div className="animation" onClick={this._click} value="5" ref="animation">progress_bar</div>
        <div className="animation" onClick={this._click} value="6" ref="animation">splashy_loader</div>
        <div className="animation" onClick={this._click} value="7" ref="animation">trail_loading</div>
        <div className="animation" onClick={this._click} value="8" ref="animation">happy_birthday</div>
        <div className="animation" onClick={this._click} value="9" ref="animation">dna_like_loader</div>
        <div className="animation" onClick={this._click} value="10" ref="animation">funky_chicken</div>
        <div className="animation" onClick={this._click} value="11" ref="animation">super_fast_tech_support</div>
        <div className="animation" onClick={this._click} value="13" ref="animation">simple</div>
        {this.state.show && (
          <div ref={el => (this._el = el)}
            style={{ position: 'absolute', top: '0', left: '0', height: '100%', width: '100%' }}
          />
        )}

      </div>


    );
  }
}

export default IndexPage;
