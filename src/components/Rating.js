import starActive from '../assets/star-active 1.svg';
import starInactive from '../assets/star-inactive 1.svg';
function Rating({ rat }) {

    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rat) {
            stars.push(<img key={i} src={starActive} alt="active star" />);
        } else {
            stars.push(<img key={i} src={starInactive} alt="inactive star" />);
        }
    }

    return <div>{stars}</div>;
}
export default Rating