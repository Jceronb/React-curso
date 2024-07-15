
import PropTypes from 'prop-types';

export const CounterApp2 = ({values} ) => {
  return (
    <>
      <h1>Mi segundo CounterApp</h1>
      <h2>{values}</h2>
    </>
  )
}

CounterApp2.propTypes={
    values:PropTypes.number.isRequired,
}



