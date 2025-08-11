const Star = ({ filled }) => (  
    <i className={`bi ${filled ? 'bi-star-fill' : 'bi-star'} text-warning me-1`} />
);

export default Star;
