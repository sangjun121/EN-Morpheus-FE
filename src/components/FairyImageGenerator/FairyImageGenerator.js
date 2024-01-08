import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FairyImageGenerator.css';

const FairyImageGenerator = ({ chaperCount }) => {
    const chaperAccordionComponent = (index) => {
        return (
            <Accordion key={index}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
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

    return (
        <div className="FairyImageGenerator">
            <div className="chapterAccordionSection">
                <p className="GeneratedChapters">Generated Chapters</p>
                <div className="Accordion">
                    {makeChapterAccordion().map((component) => component)}
                </div>
            </div>
            <div className="generatedImageSection">image</div>
        </div>
    );
};

export default FairyImageGenerator;
