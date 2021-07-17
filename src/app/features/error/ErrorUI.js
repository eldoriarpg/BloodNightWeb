import React from 'react'
import { reset } from './errorSlice'
import { useAppSelector, useAppDispatch } from '../../hooks'

const ErrorUi = () => {
  const error = useAppSelector((state) => state.error.value)
  const dispatch = useAppDispatch()

  return (
    <>
      {error && (
        <div className="p-2">
          <button
            onClick={() => dispatch(reset())}
            className="w-6 h-6 m-2 text-black bg-red-500 rounded-full"
          >
            {'×'}
          </button>
          <span>{error}</span>
        </div>
      )}
    </>
  )
}

export default ErrorUi
