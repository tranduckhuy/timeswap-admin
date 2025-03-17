import { PacmanLoader } from 'react-spinners'

const Spinner = () => {
  return (
    <div className='fixed inset-0 flex justify-center items-center'>
      <PacmanLoader color='#4A90E2' size={25} />
    </div>
  )
}

export default Spinner
