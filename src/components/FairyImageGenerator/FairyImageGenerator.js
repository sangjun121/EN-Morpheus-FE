import * as React from 'react';
import { useState, useRef } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FairyImageGenerator.css';

const FairyImageGenerator = ({ chaperCount }) => {
    const fairyTaleChapterData = [
        {
            chapterNum: 1,
            story: '릴리의 일상과 신비한 숲',
            plot: '릴리의 숲 속 생활 소개와 신비한 포털 발견',
            background: '신비로운 숲, 푸르른 나무들 사이로 빛나는 포털',
            narrativeText:
                "오늘도 호기심 많은 릴리는 숲을 탐험했어요. '후각이 감지하는 이 신비한 냄새는 무엇이지?' 숲에서 빛나는 포털을 찾았죠. '이게 뭐지? 우주로 가는 길인가?'",
        },
        {
            chapterNum: 2,
            story: '포털을 통해 외계 행성으로',
            plot: '릴리의 우주 포털 통과와 외계 행성 도착',
            background: '반짝이는 포털, 환상적인 우주, 이국적인 외계 행성',
            narrativeText:
                "용감한 릴리, 포털을 통과했습니다. '우와! 별들이 반짝이는 우주야!' 외계 행성에 도착하여 모험은 시작되었어요.",
        },
        {
            chapterNum: 3,
            story: '외계 생명체와의 첫 만남',
            plot: '친근한 외계 생명체와의 조우',
            background: '기괴한 식물들과 다양한 색의 땅, 친화적인 외계 생명체',
            narrativeText:
                "그곳에는 특별한 친구가 있었어요. '안녕, 나는 릴리야!' 새로운 친구들이 릴리에게 웃으며 대답했습니다. '반갑다, 여기는 다정한 행성이란다.",
        },
        {
            chapterNum: 4,
            story: '외계 친구들과의 우정',
            plot: '친구들과의 우정을 쌓으며 협동 놀이',
            background: '이색적이고 화려한 외계 마을, 즐거워하는 생명체들',
            narrativeText:
                "외계 친구들과 늘 함께 해요. '더 높이 뛰어보자!' '호오, 잘한다 릴리!' 우정과 협동이 즐거운 시간을 만들었죠.",
        },
        {
            chapterNum: 5,
            story: '행성의 위기와 릴리의 노력',
            plot: '릴리와 친구들, 행성을 위기에서 구하는 임무',
            background: '어두어지는 하늘, 고민에 빠진 외계 생명체들',
            narrativeText:
                "문제가 생겼어요! '어떻게 하면 돼?' 릴리와 친구들은 머리를 모아 고민했습니다. '함께라면 해결할 수 있어!",
        },
        {
            chapterNum: 6,
            story: '외계 식물의 마법',
            plot: '이야기에 마법적인 요소 도입으로 문제 해결의 실마리',
            background: '빛나는 식물, 마법 같은 환상의 푸른빛',
            narrativeText:
                "타오르는 식물의 비밀, '이 식물에서 답을 찾자!' 릴리는 외계 식물의 힘을 빌려 큰 걸음을 내디뎠어요.",
        },
        {
            chapterNum: 7,
            story: '위기 극복과 새로운 발견',
            plot: '릴리의 우주 용기로 인한 문제의 해결',
            background: '폭풍이 가라앉은 평화로운 행성, 감사하는 생명체들',
            narrativeText:
                '릴리는 용감함을 발휘했어요. "괜찮아, 우린 할 수 있어!" 모두가 릴리를 응원하며 문제를 극복했습니다.',
        },
        {
            chapterNum: 8,
            story: '귀환을 결심한 릴리',
            plot: '릴리가 숲으로의 귀환을 결심',
            background: '송별회를 여는 외계 주민들, 반짝이는 별빛 아래 포털',
            narrativeText:
                '"이제 숲으로 돌아갈 시간이야." 릴리가 말했습니다. 외계 친구들은 기념으로 특별한 선물을 주었어요.',
        },
        {
            chapterNum: 9,
            story: '숲으로의 여정',
            plot: '포털을 통한 릴리의 귀환 여정',
            background: '바람이 부는 꽃의 행성, 광채를 잃은 포털',
            narrativeText:
                '"안녕, 나의 친구들아!" 릴리는 포털을 건너며 작별 인사를 했습니다. 우주의 넓은 공간을 홀로 여행하며 고향을 향해 갔죠.',
        },
        {
            chapterNum: 10,
            story: '신비한 숲에서의 새로운 시작',
            plot: '릴리의 숲 귀환과 모험담의 전파',
            background:
                '숲의 친구들이 반기는 환영 장소, 릴리의 이야기를 경청하는 동물들',
            narrativeText:
                '"나는 많은 것을 배웠어. 우주의 용기란 바로..." 릴리가 숲속 친구들에게 모험담을 전했습니다. 그녀의 이야기는 오래오래 전해졌죠.',
        },
    ]; //더미 데이터

    // 전체 스크립트 제공 state
    const [allScriptState, setAllScriptState] = useState(false);
    const viewAllScriptButton = useRef();
    const toggleAllScript = () => {
        setAllScriptState(!allScriptState);

        if (allScriptState) {
            viewAllScriptButton.current.innerText = 'View All Script';
            return;
        }
        viewAllScriptButton.current.innerText = 'View Seperate Chapter';
    };

    // 현재 위치 챕터 state
    const [chapterNumberState, setChapterNumberState] = useState(0);

    //1. view all script
    const chaperAccordionComponent = (index) => {
        return (
            <Accordion key={index}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="AccordionSummary"
                >
                    <Typography>
                        {'Chapter' +
                            ' ' +
                            fairyTaleChapterData[index].chapterNum}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="chapterDescrption">
                            <p className="title">줄거리</p>
                            <p className="detail">
                                {fairyTaleChapterData[index].story}
                            </p>
                            <p className="title">구성</p>
                            <p className="detail">
                                {fairyTaleChapterData[index].plot}
                            </p>
                            <p className="title">배경</p>
                            <p className="detail">
                                {fairyTaleChapterData[index].background}
                            </p>
                            <p className="title">대사 및 나레이션</p>
                            <p className="detail">
                                {fairyTaleChapterData[index].narrativeText}
                            </p>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        );
    };
    const makeChapterAccordion = () => {
        let accordionArray = [];

        for (let index = 0; index < chaperCount; index++) {
            accordionArray.push(chaperAccordionComponent(index));
        }
        return accordionArray;
    };
    const ViewAllScriptComponent = () => {
        return (
            <div>
                <p className="GeneratedChapters">Generated Chapters</p>
                <div className="Accordion">
                    {makeChapterAccordion().map((component) => component)}
                </div>
            </div>
        );
    };

    //2. separate chapter view
    const ViewSeparateChapterScriptComponent = () => {
        return (
            <div className="ViewSeparateChapterScriptComponent">
                <div className="scriptContainer">
                    <div className="topContainer">
                        <p className="ChapterName">
                            Chapter{' '}
                            {
                                fairyTaleChapterData[chapterNumberState]
                                    .chapterNum
                            }
                        </p>
                        <div className="buttonContainer">
                            {chapterNumberState !== 0 ? (
                                <a
                                    href="javascript:void(0);"
                                    class="btn-arrow btn-arrow-left"
                                    title="Previous"
                                    onClick={loadPreviousChapter}
                                ></a>
                            ) : null}
                            {chapterNumberState !== chaperCount - 1 ? (
                                <a
                                    href="javascript:void(0);"
                                    class="btn-arrow btn-arrow-right"
                                    title="Next"
                                    onClick={loadNextChapter}
                                ></a>
                            ) : null}
                        </div>
                    </div>
                    <p className="title">Story</p>
                    <p className="detail">
                        {fairyTaleChapterData[chapterNumberState].story}
                    </p>
                    <p className="title">Plot</p>
                    <p className="detail">
                        {fairyTaleChapterData[chapterNumberState].plot}
                    </p>
                    <p className="title">Background</p>
                    <p className="detail">
                        {fairyTaleChapterData[chapterNumberState].background}
                    </p>
                    <p className="title">Narrative</p>
                    <p className="detail">
                        {fairyTaleChapterData[chapterNumberState].narrativeText}
                    </p>
                    <div className="GenerateImageButtonContainer">
                        <button class="custom-btn btn-5">
                            <span>Read More</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const loadNextChapter = () => {
        if (chapterNumberState === chaperCount - 1) {
            return;
        }
        setChapterNumberState(chapterNumberState + 1);
    };
    const loadPreviousChapter = () => {
        if (chapterNumberState === 0) {
            return;
        }
        setChapterNumberState(chapterNumberState - 1);
    };

    return (
        <div className="FairyImageGenerator">
            <div className="chapterAccordionSection">
                <button
                    ref={viewAllScriptButton}
                    onClick={toggleAllScript}
                    className="scriptToggleButton"
                >
                    View All Script
                </button>
                {allScriptState ? (
                    <ViewAllScriptComponent />
                ) : (
                    <ViewSeparateChapterScriptComponent />
                )}
            </div>
            <div className="generatedImageSection">image</div>
        </div>
    );
};

export default FairyImageGenerator;
