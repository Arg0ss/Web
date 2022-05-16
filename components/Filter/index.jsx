import React, { useState, useEffect } from "react";
import { Slider } from "antd";
import Head from "next/head";
import { Tag } from "./assets/filter";
import { Article } from "../Models/ModelArticle";
import * as S from "./styles";

import data from "./assets/data";

export default function Fitler() {
  const marks = {
    0: {
      style: {
        color: "#f50",
      },
      label: <strong>All</strong>,
    },
    5: "5m",
    10: "10m",
    15: "15m",
    20: "20m",
    25: {
      style: {
        color: "#f50",
      },
      label: <strong>25m</strong>,
    },
  };

  const [res, setRes] = useState([]);
  const [tag, setTag] = useState("Tudo");
  const [timer, setTimer] = useState(0);

  function handleChange(value) {
    setTimer(value);
  }

  useEffect(() => {
    function Fill() {
      const search = [];
      if (tag === "Tudo") {
        const Filtro = data.filter((element) => element);
        search.push(Filtro);
      }

      if (timer === 0) {
        const Filtro = data.filter((element) => element.tag == tag);
        search.push(Filtro);
      }

      if (tag) {
        const Filtro = data.filter(
          (element) => element.tag == tag && element.timer == timer
        );
        search.push(Filtro);
      }
      return setRes(search[0]);
    }

    Fill();
  }, [tag, timer]);

  const Active = {
    opacity: 1,
  };

  const Desactive = {
    opacity: 0.5,
  };

  return (
    <>
      <S.Container>
        <Article data={res}>
          <div className="main-container">
            <div className="filter-container">
              <div className="category-head">
                <ul>
                  {Tag.map((item, index) => (
                    <S.Button
                      key={index}
                      onClick={() => {
                        setTimer(0);
                        setTag(item.type);
                      }}
                      color={item.color}
                      style={item.type === tag ? Active : Desactive}
                    >
                      <span>{item.icon}</span>
                      <li>{item.type}</li>
                    </S.Button>
                  ))}
                </ul>
              </div>

              {tag === "Tudo" ? undefined : (
                <div className="select">
                  <Slider
                    min={0}
                    max={25}
                    onChange={handleChange}
                    marks={marks}
                    step={null}
                    value={timer}
                    defaultValue={timer}
                  />
                </div>
              )}
            </div>
          </div>
        </Article>
      </S.Container>
    </>
  );
}
