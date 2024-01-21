import React, { useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/API";
import reducer from "../api/Reducer";
import "./FairyImageGeneratorPage.scss";

const FairyImageGeneratorPage = () => {
  const inputCount = 19;
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  //   const fetchScenarioDraft = async () => {
  //     dispatch({ type: "LOADING" });
  //     try {
  //       const response = await API.get("url");
  //       dispatch({ type: "SUCCESS", data: response.data });
  //     } catch (e) {
  //       dispatch({ type: "ERROR", error: e });
  //     }
  //   };

  //   useEffect(() => {
  //     fetchScenarioDraft();
  //   }, []);

  //   const changeScenarioDraft = () => {
  //     fetchScenarioDraft();
  //   };

  //   const { loading, data: scenarioDraft, error } = state;

  //   if (loading) return <div>loading...</div>;
  //   if (error) return <div>server error</div>;
  //   if (!scenarioDraft) return null;

  return (
    <div className="image-generate-page">
      <div class="pages">
        {/* <input id="one" name="trigger" type="radio" />
        <input id="two" name="trigger" type="radio" />
        <input id="three" name="trigger" type="radio" />
        <input id="four" name="trigger" type="radio" />
        <input id="five" name="trigger" type="radio" /> */}

        {Array.from({ length: inputCount }, (_, i) => (
          <input key={i} id={`input-${i + 1}`} type="radio" name="trigger" />
        ))}

        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="logo">Morpheus</div>
            <div class="pagenumber">1 2</div>
            <div class="content">
              <div class="content_center">
                <h4>Congratulation!! You have finally reached the last step</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="content">
              <div class="content_center right">
                <h4>Congratulation!! You have finally reached the last step</h4>
              </div>
              <div class="overlay"></div>
            </div>
            <div class="control next">
              <label for="input-2"></label>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="logo">Morpheus</div>
            <div class="pagenumber">2 3</div>
            <div class="control">
              <label for="input-1"></label>
            </div>
            <div class="content">
              <div class="content_picture"></div>
              <div class="content_offset">
                <h2>EXPLANATION</h2>
                <p>
                  This is the final step in creating your own fairy tale. When
                  you press the image generation button on the screen, AI will
                  create an image that matches your scenario. Please select an
                  image that suits your fairy tale. If you don't like it, you
                  can simply click the button again for a new image.
                </p>
              </div>
              <h1>
                <span>P</span>
                <span>L</span>
                <span>E</span>
                <span>A</span>
                <span>S</span>
                <span>E</span>
                <span>&nbsp;</span>
                <span>F</span>
                <span>i</span>
                <span>n</span>
                <span>d</span>
                <span>&nbsp;</span>
                <span>a</span>
                <span>n</span>
                <span>&nbsp;</span>
                <span>i</span>
                <span>m</span>
                <span>a</span>
                <span>g</span>
                <span>e</span>
                <span>&nbsp;</span>
                <span>t</span>
                <span>h</span>
                <span>a</span>
                <span>t</span>
                <br />
                <span>m</span>
                <span>a</span>
                <span>t</span>
                <span>c</span>
                <span>h</span>
                <span>e</span>
                <span>s</span>
                <span>&nbsp;</span>
                <span>y</span>
                <span>o</span>
                <span>u</span>
                <span>r</span>
                <span>&nbsp;</span>
                <span>f</span>
                <span>a</span>
                <span>i</span>
                <span>r</span>
                <span>y</span>
                <span>&nbsp;</span>
                <span>t</span>
                <span>a</span>
                <span>l</span>
                <span>e</span>
              </h1>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="hamburger">
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
            </div>
            <div class="control next">
              <label for="input-3"></label>
            </div>
            <div class="bg"></div>
            <div class="footer">
              <i class="fab fa-google-plus-g"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="far fa-share-square"></i>
            </div>
            <div class="content">
              <div class="content_quote">
                <h5>
                  <span class="quo">
                    <i>"</i>
                  </span>
                  <span>This is your</span>
                  <span>own fairy tale</span>
                  <span class="name">Morpheus</span>
                  <span class="auth">- En# Morpheus</span>
                  <span class="quo">"</span>
                </h5>
              </div>
              <div class="content_picture"></div>
              <h1>
                <span>P</span>
                <span>L</span>
                <span>E</span>
                <span>A</span>
                <span>S</span>
                <span>E</span>
                <span>&nbsp;</span>
                <span>F</span>
                <span>i</span>
                <span>n</span>
                <span>d</span>
                <span>&nbsp;</span>
                <span>a</span>
                <span>n</span>
                <span>&nbsp;</span>
                <span>i</span>
                <span>m</span>
                <span>a</span>
                <span>g</span>
                <span>e</span>
                <span>&nbsp;</span>
                <span>t</span>
                <span>h</span>
                <span>a</span>
                <span>t</span>
                <br />
                <span>m</span>
                <span>a</span>
                <span>t</span>
                <span>c</span>
                <span>h</span>
                <span>e</span>
                <span>s</span>
                <span>&nbsp;</span>
                <span>y</span>
                <span>o</span>
                <span>u</span>
                <span>r</span>
                <span>&nbsp;</span>
                <span>f</span>
                <span>a</span>
                <span>i</span>
                <span>r</span>
                <span>y</span>
                <span>&nbsp;</span>
                <span>t</span>
                <span>a</span>
                <span>l</span>
                <span>e</span>
              </h1>
            </div>
          </div>
        </div>

        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="logo">Morpheus</div>
            <div class="pagenumber">4 5 </div>
            <div class="content">
              <div class="content_scenario">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
              </div>
            </div>
            <div class="control">
              <label for="input-2"></label>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="hamburger">
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
            </div>
            <div class="control next">
              <label for="input-4"></label>
            </div>
            <div class="bg"></div>
            <div class="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div class="content">{/* image생성 */}</div>
            <div class="footer">
              <i class="fab fa-google-plus-g"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="logo">Morpheus</div>
            <div class="pagenumber">6 7 </div>
            <div class="content">
              <div class="content_scenario">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
              </div>
            </div>
            <div class="control">
              <label for="input-3"></label>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="hamburger">
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
            </div>
            <div class="control next">
              <label for="input-5"></label>
            </div>
            <div class="bg"></div>
            <div class="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div class="content">{/* image생성 */}</div>
            <div class="footer">
              <i class="fab fa-google-plus-g"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="logo">Morpheus</div>
            <div class="pagenumber">8 9 </div>
            <div class="content">
              <div class="content_scenario">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
              </div>
            </div>
            <div class="control">
              <label for="input-4"></label>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="hamburger">
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
            </div>
            <div class="control next">
              <label for="input-6"></label>
            </div>
            <div class="bg"></div>
            <div class="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div class="content">{/* image생성 */}</div>
            <div class="footer">
              <i class="fab fa-google-plus-g"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="logo">Morpheus</div>
            <div class="pagenumber">10 11 </div>
            <div class="content">
              <div class="content_scenario">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
              </div>
            </div>
            <div class="control">
              <label for="input-5"></label>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="hamburger">
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
            </div>
            <div class="control next">
              <label for="input-7"></label>
            </div>
            <div class="bg"></div>
            <div class="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div class="content">{/* image생성 */}</div>
            <div class="footer">
              <i class="fab fa-google-plus-g"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="logo">Morpheus</div>
            <div class="pagenumber">12 13 </div>
            <div class="content">
              <div class="content_scenario">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
              </div>
            </div>
            <div class="control">
              <label for="input-6"></label>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="hamburger">
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
            </div>
            <div class="control next">
              <label for="input-8"></label>
            </div>
            <div class="bg"></div>
            <div class="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div class="content">{/* image생성 */}</div>
            <div class="footer">
              <i class="fab fa-google-plus-g"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="logo">Morpheus</div>
            <div class="pagenumber">14 15 </div>
            <div class="content">
              <div class="content_scenario">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
              </div>
            </div>
            <div class="control">
              <label for="input-7"></label>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="hamburger">
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
            </div>
            <div class="control next">
              <label for="input-9"></label>
            </div>
            <div class="bg"></div>
            <div class="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div class="content">{/* image생성 */}</div>
            <div class="footer">
              <i class="fab fa-google-plus-g"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="logo">Morpheus</div>
            <div class="pagenumber">16 17 </div>
            <div class="content">
              <div class="content_scenario">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
              </div>
            </div>
            <div class="control">
              <label for="input-8"></label>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="hamburger">
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
            </div>
            <div class="control next">
              <label for="input-10"></label>
            </div>
            <div class="bg"></div>
            <div class="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div class="content">{/* image생성 */}</div>
            <div class="footer">
              <i class="fab fa-google-plus-g"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="logo">Morpheus</div>
            <div class="pagenumber">18 19 </div>
            <div class="content">
              <div class="content_scenario">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
              </div>
            </div>
            <div class="control">
              <label for="input-9"></label>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="hamburger">
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
            </div>
            <div class="control next">
              <label for="input-11"></label>
            </div>
            <div class="bg"></div>
            <div class="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div class="content">{/* image생성 */}</div>
            <div class="footer">
              <i class="fab fa-google-plus-g"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="logo">Morpheus</div>
            <div class="pagenumber">20 21 </div>
            <div class="content">
              <div class="content_scenario">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
              </div>
            </div>
            <div class="control">
              <label for="input-10"></label>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="hamburger">
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
            </div>
            <div class="control next">
              <label for="input-12"></label>
            </div>
            <div class="bg"></div>
            <div class="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div class="content">{/* image생성 */}</div>
            <div class="footer">
              <i class="fab fa-google-plus-g"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="logo">Morpheus</div>
            <div class="pagenumber">22 23 </div>
            <div class="content">
              <div class="content_scenario">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
              </div>
            </div>
            <div class="control">
              <label for="input-11"></label>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="hamburger">
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
            </div>
            <div class="control next">
              <label for="input-13"></label>
            </div>
            <div class="bg"></div>
            <div class="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div class="content">{/* image생성 */}</div>
            <div class="footer">
              <i class="fab fa-google-plus-g"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="logo">Morpheus</div>
            <div class="pagenumber">24 25 </div>
            <div class="content">
              <div class="content_scenario">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
              </div>
            </div>
            <div class="control">
              <label for="input-12"></label>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="hamburger">
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
            </div>
            <div class="control next">
              <label for="input-14"></label>
            </div>
            <div class="bg"></div>
            <div class="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div class="content">{/* image생성 */}</div>
            <div class="footer">
              <i class="fab fa-google-plus-g"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="logo">Morpheus</div>
            <div class="pagenumber">26 27 </div>
            <div class="content">
              <div class="content_scenario">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
              </div>
            </div>
            <div class="control">
              <label for="input-13"></label>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="hamburger">
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
            </div>
            <div class="control next">
              <label for="input-15"></label>
            </div>
            <div class="bg"></div>
            <div class="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div class="content">{/* image생성 */}</div>
            <div class="footer">
              <i class="fab fa-google-plus-g"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="logo">Morpheus</div>
            <div class="pagenumber">28 29 </div>
            <div class="content">
              <div class="content_scenario">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
              </div>
            </div>
            <div class="control">
              <label for="input-14"></label>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="hamburger">
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
            </div>
            <div class="control next">
              <label for="input-16"></label>
            </div>
            <div class="bg"></div>
            <div class="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div class="content">{/* image생성 */}</div>
            <div class="footer">
              <i class="fab fa-google-plus-g"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="logo">Morpheus</div>
            <div class="pagenumber">30 31 </div>
            <div class="content">
              <div class="content_scenario">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
              </div>
            </div>
            <div class="control">
              <label for="input-15"></label>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="hamburger">
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
            </div>
            <div class="control next">
              <label for="input-17"></label>
            </div>
            <div class="bg"></div>
            <div class="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div class="content">{/* image생성 */}</div>
            <div class="footer">
              <i class="fab fa-google-plus-g"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="logo">Morpheus</div>
            <div class="pagenumber">32 33 </div>
            <div class="content">
              <div class="content_scenario">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
              </div>
            </div>
            <div class="control">
              <label for="input-16"></label>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="hamburger">
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
            </div>
            <div class="control next">
              <label for="input-18"></label>
            </div>
            <div class="bg"></div>
            <div class="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div class="content">{/* image생성 */}</div>
            <div class="footer">
              <i class="fab fa-google-plus-g"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="logo">Morpheus</div>
            <div class="pagenumber">34 35 </div>
            <div class="content">
              <div class="content_scenario">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h6>Lorem ipsum dolor sit amet</h6>
              </div>
            </div>
            <div class="control">
              <label for="input-17"></label>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="hamburger">
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
            </div>
            <div class="control next">
              <label for="input-19"></label>
            </div>
            <div class="bg"></div>
            <div class="content_centerimage">
              {/* 로딩중일 때 이미지 생성 */}
            </div>
            <div class="content">{/* image생성 */}</div>
            <div class="footer">
              <i class="fab fa-google-plus-g"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="far fa-share-square"></i>
            </div>
          </div>
        </div>

        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="logo">Morpheus</div>
            <div class="pagenumber">36 37</div>
            <div class="content">
              <div class="content_section">
                <h2>Super</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  a imperdiet sapien. Nunc vehicula lorem neque, eu rutrum
                  sapien posuere ut. Nunc eget ullamcorper turpis. Sed in
                  vehicula magna, vitae eleifend velit.
                </p>
              </div>
              <div class="content_section">
                <h2>Awesome</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  a imperdiet sapien. Nunc vehicula lorem neque, eu rutrum
                  sapien posuere ut. Nunc eget ullamcorper turpis. Sed in
                  vehicula magna, vitae eleifend velit.
                </p>
              </div>
              <div class="content_section">
                <h2>Great</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  a imperdiet sapien. Nunc vehicula lorem neque, eu rutrum
                  sapien posuere ut. Nunc eget ullamcorper turpis. Sed in
                  vehicula magna.
                </p>
              </div>
            </div>
            <div class="control">
              <label for="input-18"></label>
            </div>
          </div>
        </div>
        <div class="pages_page">
          <div class="pages_page__inner">
            <div class="hamburger">
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
              <div class="hamburger_part"></div>
            </div>
            <div class="bg"></div>
            <div class="content"></div>
            <div class="footer">
              <i class="fab fa-google-plus-g"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="far fa-share-square"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairyImageGeneratorPage;
