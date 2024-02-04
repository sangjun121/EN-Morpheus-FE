import React, { useEffect, useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import reducer from '../api/Reducer';
import './FairyImageGeneratorPage.scss';

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
            <div className="pages">
                {Array.from({ length: inputCount }, (_, i) => (
                    <input
                        key={i}
                        id={`input-${i + 1}`}
                        type="radio"
                        name="trigger"
                    />
                ))}

                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">Morpheus</div>
                        <div className="pagenumber">1 2</div>
                        <div className="content">
                            <div className="content_center">
                                <h4>
                                    Congratulation!! You have finally reached
                                    the last step
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="content">
                            <div className="content_center right">
                                <h4>
                                    Congratulation!! You have finally reached
                                    the last step
                                </h4>
                            </div>
                            <div className="overlay"></div>
                        </div>
                        <div className="control next">
                            <label htmlFor="input-2"></label>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">Morpheus</div>
                        <div className="pagenumber">2 3</div>
                        <div className="control">
                            <label htmlFor="input-1"></label>
                        </div>
                        <div className="content">
                            <div className="content_picture"></div>
                            <div className="content_offset">
                                <h2>EXPLANATION</h2>
                                <p>
                                    This is the final step in creating your own
                                    fairy tale. When you press the image
                                    generation button on the screen, AI will
                                    create an image that matches your scenario.
                                    Please select an image that suits your fairy
                                    tale. If you don't like it, you can simply
                                    click the button again for a new image.
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
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                        </div>
                        <div className="control next">
                            <label htmlFor="input-3"></label>
                        </div>
                        <div className="bg"></div>
                        <div className="footer">
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                            <i className="far fa-share-square"></i>
                        </div>
                        <div className="content">
                            <div className="content_quote">
                                <h5>
                                    <span className="quo">
                                        <i>"</i>
                                    </span>
                                    <span>This is your</span>
                                    <span>own fairy tale</span>
                                    <span className="name">Morpheus</span>
                                    <span className="auth">- En# Morpheus</span>
                                    <span className="quo">"</span>
                                </h5>
                            </div>
                            <div className="content_picture"></div>
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

                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">Morpheus</div>
                        <div className="pagenumber">4 5 </div>
                        <button className="content_button">generate</button>
                        <div className="content">
                            <div className="content_section">
                                <h2>Episode 1</h2>
                                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
                            </div>
                        </div>

                        <div className="control">
                            <label htmlFor="input-2"></label>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                        </div>
                        <div className="control next">
                            <label htmlFor="input-4"></label>
                        </div>
                        <div className="bg"></div>
                        <div className="content_centerimage">
                            {/* 로딩중일 때 이미지 생성 */}
                        </div>
                        <div className="content">{/* image생성 */}</div>
                        <div className="footer">
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                            <i className="far fa-share-square"></i>
                        </div>
                    </div>
                </div>

                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">Morpheus</div>
                        <div className="pagenumber">6 7 </div>
                        <button className="content_button">generate</button>
                        <div className="content">
                            <div className="content_section">
                                <h2>Episode 2</h2>
                                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
                            </div>
                        </div>
                        <div className="control">
                            <label htmlFor="input-3"></label>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                        </div>
                        <div className="control next">
                            <label htmlFor="input-5"></label>
                        </div>
                        <div className="bg"></div>
                        <div className="content_centerimage">
                            {/* 로딩중일 때 이미지 생성 */}
                        </div>
                        <div className="content">{/* image생성 */}</div>
                        <div className="footer">
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                            <i className="far fa-share-square"></i>
                        </div>
                    </div>
                </div>

                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">Morpheus</div>
                        <div className="pagenumber">8 9 </div>
                        <button className="content_button">generate</button>
                        <div className="content">
                            <div className="content_section">
                                <h2>Episode 3</h2>
                                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
                            </div>
                        </div>
                        <div className="control">
                            <label htmlFor="input-4"></label>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                        </div>
                        <div className="control next">
                            <label htmlFor="input-6"></label>
                        </div>
                        <div className="bg"></div>
                        <div className="content_centerimage">
                            {/* 로딩중일 때 이미지 생성 */}
                        </div>
                        <div className="content">{/* image생성 */}</div>
                        <div className="footer">
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                            <i className="far fa-share-square"></i>
                        </div>
                    </div>
                </div>

                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">Morpheus</div>
                        <div className="pagenumber">10 11 </div>
                        <button className="content_button">generate</button>
                        <div className="content">
                            <div className="content_section">
                                <h2>Episode 4</h2>
                                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
                            </div>
                        </div>
                        <div className="control">
                            <label htmlFor="input-5"></label>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                        </div>
                        <div className="control next">
                            <label htmlFor="input-7"></label>
                        </div>
                        <div className="bg"></div>
                        <div className="content_centerimage">
                            {/* 로딩중일 때 이미지 생성 */}
                        </div>
                        <div className="content">{/* image생성 */}</div>
                        <div className="footer">
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                            <i className="far fa-share-square"></i>
                        </div>
                    </div>
                </div>

                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">Morpheus</div>
                        <div className="pagenumber">12 13 </div>
                        <button className="content_button">generate</button>
                        <div className="content">
                            <div className="content_section">
                                <h2>Episode 5</h2>
                                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
                            </div>
                        </div>
                        <div className="control">
                            <label htmlFor="input-6"></label>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                        </div>
                        <div className="control next">
                            <label htmlFor="input-8"></label>
                        </div>
                        <div className="bg"></div>
                        <div className="content_centerimage">
                            {/* 로딩중일 때 이미지 생성 */}
                        </div>
                        <div className="content">{/* image생성 */}</div>
                        <div className="footer">
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                            <i className="far fa-share-square"></i>
                        </div>
                    </div>
                </div>

                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">Morpheus</div>
                        <div className="pagenumber">14 15 </div>
                        <button className="content_button">generate</button>
                        <div className="content">
                            <div className="content_section">
                                <h2>Episode 6</h2>
                                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
                            </div>
                        </div>
                        <div className="control">
                            <label htmlFor="input-7"></label>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                        </div>
                        <div className="control next">
                            <label htmlFor="input-9"></label>
                        </div>
                        <div className="bg"></div>
                        <div className="content_centerimage">
                            {/* 로딩중일 때 이미지 생성 */}
                        </div>
                        <div className="content">{/* image생성 */}</div>
                        <div className="footer">
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                            <i className="far fa-share-square"></i>
                        </div>
                    </div>
                </div>

                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">Morpheus</div>
                        <div className="pagenumber">16 17 </div>
                        <button className="content_button">generate</button>
                        <div className="content">
                            <div className="content_section">
                                <h2>Episode 7</h2>
                                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
                            </div>
                        </div>
                        <div className="control">
                            <label htmlFor="input-8"></label>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                        </div>
                        <div className="control next">
                            <label htmlFor="input-10"></label>
                        </div>
                        <div className="bg"></div>
                        <div className="content_centerimage">
                            {/* 로딩중일 때 이미지 생성 */}
                        </div>
                        <div className="content">{/* image생성 */}</div>
                        <div className="footer">
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                            <i className="far fa-share-square"></i>
                        </div>
                    </div>
                </div>

                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">Morpheus</div>
                        <div className="pagenumber">18 19 </div>
                        <button className="content_button">generate</button>
                        <div className="content">
                            <div className="content_section">
                                <h2>Episode 8</h2>
                                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
                            </div>
                        </div>
                        <div className="control">
                            <label htmlFor="input-9"></label>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                        </div>
                        <div className="control next">
                            <label htmlFor="input-11"></label>
                        </div>
                        <div className="bg"></div>
                        <div className="content_centerimage">
                            {/* 로딩중일 때 이미지 생성 */}
                        </div>
                        <div className="content">{/* image생성 */}</div>
                        <div className="footer">
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                            <i className="far fa-share-square"></i>
                        </div>
                    </div>
                </div>

                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">Morpheus</div>
                        <div className="pagenumber">20 21 </div>
                        <button className="content_button">generate</button>
                        <div className="content">
                            <div className="content_section">
                                <h2>Episode 9</h2>
                                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
                            </div>
                        </div>
                        <div className="control">
                            <label htmlFor="input-10"></label>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                        </div>
                        <div className="control next">
                            <label htmlFor="input-12"></label>
                        </div>
                        <div className="bg"></div>
                        <div className="content_centerimage">
                            {/* 로딩중일 때 이미지 생성 */}
                        </div>
                        <div className="content">{/* image생성 */}</div>
                        <div className="footer">
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                            <i className="far fa-share-square"></i>
                        </div>
                    </div>
                </div>

                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">Morpheus</div>
                        <div className="pagenumber">22 23 </div>
                        <button className="content_button">generate</button>
                        <div className="content">
                            <div className="content_section">
                                <h2>Episode 10</h2>
                                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
                            </div>
                        </div>
                        <div className="control">
                            <label htmlFor="input-11"></label>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                        </div>
                        <div className="control next">
                            <label htmlFor="input-13"></label>
                        </div>
                        <div className="bg"></div>
                        <div className="content_centerimage">
                            {/* 로딩중일 때 이미지 생성 */}
                        </div>
                        <div className="content">{/* image생성 */}</div>
                        <div className="footer">
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                            <i className="far fa-share-square"></i>
                        </div>
                    </div>
                </div>

                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">Morpheus</div>
                        <div className="pagenumber">24 25 </div>
                        <button className="content_button">generate</button>
                        <div className="content">
                            <div className="content_section">
                                <h2>Episode 11</h2>
                                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
                            </div>
                        </div>
                        <div className="control">
                            <label htmlFor="input-12"></label>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                        </div>
                        <div className="control next">
                            <label htmlFor="input-14"></label>
                        </div>
                        <div className="bg"></div>
                        <div className="content_centerimage">
                            {/* 로딩중일 때 이미지 생성 */}
                        </div>
                        <div className="content">{/* image생성 */}</div>
                        <div className="footer">
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                            <i className="far fa-share-square"></i>
                        </div>
                    </div>
                </div>

                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">Morpheus</div>
                        <div className="pagenumber">26 27 </div>
                        <button className="content_button">generate</button>
                        <div className="content">
                            <div className="content_section">
                                <h2>Episode 12</h2>
                                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
                            </div>
                        </div>
                        <div className="control">
                            <label htmlFor="input-13"></label>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                        </div>
                        <div className="control next">
                            <label htmlFor="input-15"></label>
                        </div>
                        <div className="bg"></div>
                        <div className="content_centerimage">
                            {/* 로딩중일 때 이미지 생성 */}
                        </div>
                        <div className="content">{/* image생성 */}</div>
                        <div className="footer">
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                            <i className="far fa-share-square"></i>
                        </div>
                    </div>
                </div>

                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">Morpheus</div>
                        <div className="pagenumber">28 29 </div>
                        <button className="content_button">generate</button>
                        <div className="content">
                            <div className="content_section">
                                <h2>Episode 13</h2>
                                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
                            </div>
                        </div>
                        <div className="control">
                            <label htmlFor="input-14"></label>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                        </div>
                        <div className="control next">
                            <label htmlFor="input-16"></label>
                        </div>
                        <div className="bg"></div>
                        <div className="content_centerimage">
                            {/* 로딩중일 때 이미지 생성 */}
                        </div>
                        <div className="content">{/* image생성 */}</div>
                        <div className="footer">
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                            <i className="far fa-share-square"></i>
                        </div>
                    </div>
                </div>

                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">Morpheus</div>
                        <div className="pagenumber">30 31 </div>
                        <button className="content_button">generate</button>
                        <div className="content">
                            <div className="content_section">
                                <h2>Episode 14</h2>
                                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
                            </div>
                        </div>
                        <div className="control">
                            <label htmlFor="input-15"></label>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                        </div>
                        <div className="control next">
                            <label htmlFor="input-17"></label>
                        </div>
                        <div className="bg"></div>
                        <div className="content_centerimage">
                            {/* 로딩중일 때 이미지 생성 */}
                        </div>
                        <div className="content">{/* image생성 */}</div>
                        <div className="footer">
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                            <i className="far fa-share-square"></i>
                        </div>
                    </div>
                </div>

                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">Morpheus</div>
                        <div className="pagenumber">32 33 </div>
                        <button className="content_button">generate</button>
                        <div className="content">
                            <div className="content_section">
                                <h2>Episode 15</h2>
                                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
                            </div>
                        </div>
                        <div className="control">
                            <label htmlFor="input-16"></label>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                        </div>
                        <div className="control next">
                            <label htmlFor="input-18"></label>
                        </div>
                        <div className="bg"></div>
                        <div className="content_centerimage">
                            {/* 로딩중일 때 이미지 생성 */}
                        </div>
                        <div className="content">{/* image생성 */}</div>
                        <div className="footer">
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                            <i className="far fa-share-square"></i>
                        </div>
                    </div>
                </div>

                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">Morpheus</div>
                        <div className="pagenumber">34 35 </div>
                        <button className="content_button">generate</button>
                        <div className="content">
                            <div className="content_section">
                                <h2>Episode 16</h2>
                                <p>{/*서버에서 정보 받아온 것 기입 */}</p>
                            </div>
                        </div>
                        <div className="control">
                            <label htmlFor="input-17"></label>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                        </div>
                        <div className="control next">
                            <label htmlFor="input-19"></label>
                        </div>
                        <div className="bg"></div>
                        <div className="content_centerimage">
                            {/* 로딩중일 때 이미지 생성 */}
                        </div>
                        <div className="content">{/* image생성 */}</div>
                        <div className="footer">
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                            <i className="far fa-share-square"></i>
                        </div>
                    </div>
                </div>

                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="logo">Morpheus</div>
                        <div className="pagenumber">36 37</div>
                        <div className="content">
                            <div className="content_center">
                                <h4>The End Morpheus</h4>
                                <h6>the end</h6>
                            </div>
                        </div>
                        <div className="control">
                            <label htmlFor="input-18"></label>
                        </div>
                    </div>
                </div>
                <div className="pages_page">
                    <div className="pages_page__inner">
                        <div className="hamburger">
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                            <div className="hamburger_part"></div>
                        </div>
                        <div className="content">
                            <div className="content_center right">
                                <h4>The End Morpheus</h4>
                                <h6>the end</h6>
                            </div>
                        </div>
                        <div className="bg"></div>

                        <div className="footer">
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fas fa-retweet"></i>
                            <i className="far fa-heart"></i>
                            <i className="far fa-share-square"></i>
                        </div>
                    </div>
                </div>
            </div>
            <button className="final_button">finish</button>
        </div>
    );
};

export default FairyImageGeneratorPage;
