import React, { useState } from 'react';
import CalculatorTitle from "./calculatorTitle.js";
import OutputScreen from "./outputScreen";
import Button from "./button.js";

function Calculator(props) {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    console.log("question Calculator",question, answer)
    const [isCalculated, setIsCalculated] = useState(false);

    const handleClick = (event) => {
        const value = event.target.value;
        switch (value) {
            case '=': {
                if (question !== '') {
                    let ans = '';
                    try {
                        ans = eval(question);
                    }
                    catch (err) {
                        setAnswer("Match Error");
                    }
                    if (ans === undefined) {
                        setAnswer("Match Error");
                    }
                    else {
                        setIsCalculated(true);
                        setAnswer(ans);
                        setQuestion(question);
                    }
                }
                break;
            }
            case 'Clear': {
                setQuestion("");
                setAnswer("");
                break;
            }
            default: {
                let newQuestion = "";
                if (isCalculated) {
                    newQuestion = value;
                    setIsCalculated(false);
                }
                else {
                    newQuestion = question + value;
                }
                setQuestion(newQuestion)
                break;
            }
        }
    };
    return (
        <div className="frame">
            <CalculatorTitle title="Calculator" />
            <div className="mainCalc">
                <OutputScreen
                    question={question}
                    answer={answer}
                />
                <div className="button-row">
                    <Button
                        className="btnaction"
                        label={'Clear'}
                        handleClick={handleClick}
                        width="300px"
                    />
                    <Button className="btnaction" label={'/'} handleClick={handleClick} />
                </div>
                <div className="button-row">
                    <Button label={'7'} handleClick={handleClick} />
                    <Button label={'8'} handleClick={handleClick} />
                    <Button label={'9'} handleClick={handleClick} />
                    <Button className="btnaction" label={'-'} handleClick={handleClick} />
                </div>
                <div className="button-row">
                    <Button label={'4'} handleClick={handleClick} />
                    <Button label={'5'} handleClick={handleClick} />
                    <Button label={'6'} handleClick={handleClick} />
                    <Button className="btnaction" label={'+'} handleClick={handleClick} />
                </div>
                <div className="button-row">
                    <Button label={'1'} handleClick={handleClick} />
                    <Button label={'2'} handleClick={handleClick} />
                    <Button label={'3'} handleClick={handleClick} />
                    <Button className="btnaction" label={'*'} handleClick={handleClick} />
                </div>
                <div className="button-row">
                <Button label={'0'} handleClick={handleClick} />
                    <Button
                        className="btnaction"
                        label={'='}
                        handleClick={handleClick}
                        width="300px" />
                </div>
            </div>

        </div>
    );
}

export default Calculator;