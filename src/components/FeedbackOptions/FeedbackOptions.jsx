import PropTypes from 'prop-types'; 
import { Container, Control } from "components/FeedbackOptions/FeedbackOptions.styled";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <Container>
            {options.map(option => {
                return (
                    <Control
                        type="button"
                        name={option}
                        key={option}
                        onClick={onLeaveFeedback}
                    >{option}
                    </Control>)
            })}
            
        </Container>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired
}