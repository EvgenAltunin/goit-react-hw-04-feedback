import PropTypes from 'prop-types';
import { Container } from "components/Section/Section.styled";

export const Section = ({ title, children }) => {
    return (
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired
}