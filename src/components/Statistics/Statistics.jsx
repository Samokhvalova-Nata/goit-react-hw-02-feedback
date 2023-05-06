import PropTypes from 'prop-types';
import {StatisticList, Text, Value} from './Statistics.styled'


export const Statistics = ({good, neutral, bad, total, positivePercentage }) => {
    return (
        <StatisticList>
            <Text>Good: <Value>{good}</Value></Text>
            <Text>Neutral: <spaValuen>{neutral}</spaValuen></Text>
            <Text>Bad: <Value>{bad}</Value></Text>
            <Text>Total: <Value>{total}</Value></Text>
            <Text>Positive feedback: <Value>{positivePercentage}%</Value></Text>
        </StatisticList>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}