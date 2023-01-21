import PropTypes from 'prop-types'; 
import { Container, Control } from "components/FeedbackOptions/FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
// отримання масива значень для кнопок, кожне значення з великої букви
    const capitalizedOptions = [];
    for (const buttonOption of options) {
      capitalizedOptions.push(buttonOption[0].toUpperCase() + buttonOption.slice(1)
      );
    }
//======================================================================
    return (
      <Container>
        {capitalizedOptions.map(capitalizedOption => {
          return (
            <Control
              type="button"
              key={capitalizedOption.toLowerCase()}
              name={capitalizedOption.toLowerCase()}
              onClick={onLeaveFeedback}
            >
              {capitalizedOption}
            </Control>
          );
        })}
      </Container>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired
}