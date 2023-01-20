import { Component, React } from "react";
// import PropTypes from 'prop-types';
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification";
// import { Section } from "components/Feedback/Feedback.styled";


export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    //Функція для отримання масива значень для кнопок, кожне значення з великої букви
    getOptions = () => {
        const buttonOpions = Object.keys(this.state)
        const options = []
        for (const buttonOption of buttonOpions) {
            options.push(buttonOption[0].toUpperCase() + buttonOption.slice(1))
        }
        return options
    }

    countTotalFeedback = () => {
        const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
        return totalFeedback
    };

    countPositiveFeedbackPercentage = () => {
        const positiveFeedbackPercentage = Math.round(this.state.good * 100 / this.countTotalFeedback());
        return positiveFeedbackPercentage
    };

    handleLeaveFeedback = (event) => {
        const buttonName = event.target.name.toLowerCase();
        this.setState(prevState => {
            return {
                [buttonName]: prevState[buttonName] += 1
            }
        })
    }

    render() {
        const { good, neutral, bad } = this.state;
    
        return (
            <div>
                <Section title="Please leave feedback">
                        <FeedbackOptions
                            options={this.getOptions()}
                            onLeaveFeedback={this.handleLeaveFeedback} />
                </Section>
                <Section title="Statistics" children>
                    {this.countTotalFeedback() > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />) : (<Notification message="No feedback given" />)}
                </Section>
            </div>
        );
    }
};