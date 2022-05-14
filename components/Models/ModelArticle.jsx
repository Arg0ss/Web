import * as S from "./ModelArticleStyle";
import { Skeleton } from "antd";

export const Article = ({ data, children }) => {
  return (
    <S.Container>
      <div class="main-container">
      {children}
      <div className="posts-collect">
        <div className="posts-main-container">
         {data.length > 0 ? (
           data.map((item, index) => {
            console.log(item);
            return (
              <article key={index} className="filter-item">
                <div className="all cripto">
                  <div className="border">
                    <div className="post-img">
                      <img className="imagemparte" src={item.background} />
                      <span
                        style={{ background: item.cor }}
                        className="category-name"
                      >
                        {item.tag}
                      </span>
                    </div>

                    <div className="post-content">
                      <div className="post-content-top">
                        <span>
                          <i className="fas fa-calendar"></i>Criado em:
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> {item.timer}m
                        </span>
                      </div>
                      <h2 className="titulo1"> {item.titulo}</h2>
                      <p> {item.description}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })
         ) : (
               <Skeleton /> 
         )}
        </div>
      </div>
      </div>
    </S.Container>
  );
};
