import PropTypes from 'prop-types';
import {Controls, ControlItem, Button} from './FeedbackOptions.styled'


export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <Controls>
            {options.map(({ id, label }) => {
                return (
                    <ControlItem key={id}>
                        <Button
                            type="button"
                            onClick={() => onLeaveFeedback(id)}>
                            {label}
                        </Button>
                    </ControlItem>
                );
            })}
        </Controls>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    })),
    onLeaveFeedback: PropTypes.func.isRequired,
}
