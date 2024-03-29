import Spinner from './assets/spinner.gif';

function spinner() {
  return (
    <div className='w-100 mt-20'>
      <img
        width={180}
        className='text-center mx-auto'
        src={Spinner}
        alt='Loading...'
      />
    </div>
  );
}

export default spinner;
