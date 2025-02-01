import PrimaryScroll from '../animations/PrimaryScroll'
import { CiNoWaitingSign } from 'react-icons/ci'
import PropTypes from 'prop-types'

const ErrorMessage = ({children}) => {
  return (
    <PrimaryScroll
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
    className="flex flex-col w-full gap-7 bg-paragraph/10 p-8 rounded-lg h-full justify-center items-center">
        <CiNoWaitingSign className=" text-5xl" />
        {children}
    </PrimaryScroll>
  )
}

ErrorMessage.propTypes = {
    children: PropTypes.any,
}

export default ErrorMessage