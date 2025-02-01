import PrimaryScroll from '../animations/PrimaryScroll'
import PropTypes from 'prop-types'
import { TbNotesOff } from 'react-icons/tb'

const ErrorMessage = ({children}) => {
  return (
    <PrimaryScroll
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
    className="flex flex-col w-full gap-7 bg-boxground p-8 rounded-lg h-full justify-center items-center">
        <TbNotesOff className=" text-5xl text-paragraph" />
        {children}
    </PrimaryScroll>
  )
}

ErrorMessage.propTypes = {
    children: PropTypes.any,
}

export default ErrorMessage