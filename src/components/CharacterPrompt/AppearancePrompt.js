import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import './AppearancePrompt.css';

const AppearancePrompt = ({
    step,
    setStep,
    characterState,
    setCharacterState,
}) => {
    const appearanceSteps = [
        {
            stepLabel: 'Please specify the character type',
        },
        {
            stepLabel: 'Create an ad group',
        },
        {
            stepLabel: 'Create an ad',
        },
    ];

    const keywords = {
        gender: ['boy', 'girl'],
        race: ['white', 'african american', 'asian', 'latina', 'hispanic'],
    };

    const SpeciesPrompt = () => {
        const [species, setSpecies] = useState('');
        const [humanAppearanceState, setHumanAppearanceState] = useState({
            race: '',
            gender: '',
        });
        const [animalSpecies, setAnimalSpecies] = useState({
            species: '',
        });

        const speciesButtonEvent = (input) => {
            if (input === 'human') setSpecies('human');
            else setSpecies('animal');
            console.log('success');
        };

        const optionClickEvent = (nameText, type) => {
            if (species === 'human') {
                setHumanAppearanceState({
                    ...humanAppearanceState,
                    [type]: nameText,
                });
            } else if (species === 'animal') {
                setAnimalSpecies({
                    [type]: nameText,
                });
            }
        };
        const changeButtonColor = () => {};

        const DetailBySpecies = () => {
            if (species === '') return null;
            if (species === 'human')
                return (
                    <div>
                        <div className="gender">
                            <p>Gender</p>
                            <div className="speciesButtonOption">
                                {keywords.gender.map((nameText, index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            optionClickEvent(nameText, 'gender')
                                        }
                                    >
                                        <div>{nameText}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="race">
                            <p>Race</p>
                            <div className="buttonOptions">
                                {keywords.race.map((nameText, index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            optionClickEvent(nameText, 'race')
                                        }
                                    >
                                        <div>{nameText}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            if (species === 'animal') return <div>종</div>;
        };

        return (
            <div>
                <div className="SpeciesPrompt">
                    <div className="SpeciesPromptButtonContainer">
                        <button onClick={() => speciesButtonEvent('human')}>
                            사람
                        </button>
                        <button onClick={() => speciesButtonEvent('animal')}>
                            동물
                        </button>
                    </div>
                </div>
                <DetailBySpecies />
            </div>
        );
    };

    const AppearanceStepper = () => {
        const theme = useTheme();
        const [activeAppearanceStep, setActiveAppearanceStep] =
            React.useState(0);
        const maxSteps = appearanceSteps.length;

        const handleNext = () => {
            setActiveAppearanceStep((prevActiveStep) => prevActiveStep + 1);
        };

        const handleBack = () => {
            setActiveAppearanceStep((prevActiveStep) => prevActiveStep - 1);
        };

        return (
            <Box sx={{ maxWidth: 1000, flexGrow: 1 }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        pl: 2,
                        bgcolor: 'background.default',
                    }}
                >
                    <Typography>
                        {appearanceSteps[activeAppearanceStep].stepLabel}
                    </Typography>
                </Paper>
                <Box
                    sx={{
                        height: 'fit-content',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <SpeciesPrompt />
                </Box>
                <MobileStepper
                    sx={{
                        width: '100%',
                    }}
                    variant="text"
                    steps={maxSteps}
                    position="static"
                    activeStep={activeAppearanceStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeAppearanceStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            onClick={handleBack}
                            disabled={activeAppearanceStep === 0}
                        >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </Box>
        );
    };

    return (
        <div>
            <div className="AppearancePromptButtonOptionContainer">
                <AppearanceStepper />
            </div>

            <div className="NextBtnContainer">
                <div
                    className="NextButton"
                    onClick={() => {
                        setStep(step + 1);
                    }}
                >
                    <p className="NextBtnText">NEXT</p>
                    <div className="NextBtnTwo">
                        <p className="NextBtnText2">GO!</p>
                    </div>
                </div>

                <div
                    class="NextButton"
                    onClick={() => {
                        setStep(step - 1);
                    }}
                >
                    <p class="NextBtnText">BACK</p>
                    <div class="NextBtnTwo">
                        <p class="NextBtnText2">GO!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppearancePrompt;
