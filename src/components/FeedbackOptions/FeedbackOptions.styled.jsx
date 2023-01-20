import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

export const Control = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    min-width: 60px;
    border-radius: 8px;
    padding: 6px;
    border: 3px solid orange;
    background-color: orange;
    color: white;
    font-size: 18px;
    font-weight: 700;

    &:hover, &:focus {
        color: black;
        background-color: white;
        box-shadow: 4px 2px 5px 0px rgba(0,0,0,0.75);
    }
`;