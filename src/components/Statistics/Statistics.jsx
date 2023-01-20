import PropTypes from 'prop-types';
import { Container } from "components/Statistics/Statistics.styled";

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <Container>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive Percentage: {positivePercentage}%</p>
        </Container>
    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
}