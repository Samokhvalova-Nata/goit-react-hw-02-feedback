import styled from '@emotion/styled';

export const Controls = styled.ul`
        display: flex;
        gap: 20px;
`;

export const ControlItem = styled.li`
        margin-top: 15px;
`

export const Button = styled.button`
        border: 1px solid transparent;
        border-radius: 5px;
        min-width: 130px;
        height: 40px;
        padding: 0px;
        background-color: var(--accent-color);
        font-weight: 500;
        font-size: 18px;
        transition: transform var(--transition), box-shadow var(--transition);

        &:hover,
        &:focus {
        transform: scale(1.05);
        box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
        }
`