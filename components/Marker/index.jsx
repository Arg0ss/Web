import React from "react";
import Head from "next/head";

import { TokenAnnotator } from "react-text-annotate";
import { Drawer } from "antd";
import { RiMarkupFill, RiMarkupLine }  from "react-icons/ri"

import Translation from "./translation";

import * as S from "./styles";

const TEXT =
  "When Sebastian Thrun started working on self-driving cars at Google in 2007, few people outside of the company took him seriously. “I can tell you very senior CEOs of major American car companies would shake my hand and turn away because I wasn’t worth talking to,” said Thrun, now the co-founder and CEO of online higher education startup Udacity, in an interview with Recode earlier this week. A little less than a decade later, dozens of self-driving startups have cropped up while automakers around the world clamor, wallet in hand, to secure their place in the fast-moving world of fully automated transportation.";

class Marker extends React.Component {
  state = {
    value: [],
    color: "#3bde97",
    on_marker: false,

    translation: undefined,
  };

  handleChange = (value) => {
    // console.log(error)
    if (this.state.on_marker) {
      this.setState({ value });
    } else {
        const find = Translation.find((t) => value.slice(-1)[0] && t.word === value.slice(-1)[0].tokens[0]);
        console.log(value)
      if (find) {
        this.setState({ translation: find });
      } else {
        this.setState({ translation: undefined });
      }
    }
  };

  handleColorChange = (e) => {
    this.setState({ color: e.target.value });
  };

  onClose = () => {
    this.setState({ translation: undefined });
  };

  render() {
    const { translation } = this.state;
    return (
     <>
       <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.19.5/antd.compact.min.css"
            integrity="sha512-eWWSqUkg467wXWb0WwpVDqckemcUsO/BrBP0X18gNHwHdFHlDQ1x2AvHdCuTxoCMmw4osOAwFGvhlZbQbHtxwA=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
        </Head>
      <S.Container>
        <div className="items">
        <input id="color-btn" type="color" onChange={this.handleColorChange} value={this.state.color} disabled={!this.state.on_marker} />
        <button
          onClick={() => this.setState({ on_marker: !this.state.on_marker })}
        >
          {this.state.on_marker ? (<RiMarkupFill color={this.state.color} size={14} />) : (<RiMarkupLine color="#8f8f8f" size={14}  />)}
        </button>
        </div>
        <Drawer
          placement={"bottom"}
          closable={false}
          onClose={this.onClose}
          visible={translation && translation.t ? true : false}
          key={"bottom"}
        >
          <p>{translation && translation.t}</p>
        </Drawer>
        <div className="container-text">
        <TokenAnnotator
          tokens={TEXT.split(" ")}
          value={this.state.value}
          onChange={this.handleChange}
          getSpan={(span) => ({
            ...span,
            color: this.state.color,
          })}
        />
        </div>
      </S.Container>
     </>
    );
  }
}

export default Marker;
