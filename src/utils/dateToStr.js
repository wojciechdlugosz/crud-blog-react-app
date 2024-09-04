import moment from 'moment';

const dateToStr = (date) => {
    const stringDate = moment(date).format('MM/DD/YYYY');
    return stringDate;
};

export default dateToStr;