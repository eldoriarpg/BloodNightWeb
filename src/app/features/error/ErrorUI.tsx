import { reset } from './errorSlice'
import { useAppSelector, useAppDispatch } from '../../hooks'

const ErrorUi = () => {
  const error = useAppSelector((state) => state.error.value)
  const dispatch = useAppDispatch()

  return (
    <>
      {error && (
        <div className="flex w-full p-2 bg-gray-900">
          <div className="flex gap-4 mx-auto my-1">
            <button
              onClick={() => dispatch(reset())}
              className="w-[28px] h-[28px] my-auto text-base font-bold text-black bg-red-500 rounded-full"
            >
              {'×'}
            </button>
            <p className="leading-tight">
              <span className="my-auto">{error}</span>
              <br />
              <span className="text-xs">Maybe your link is invalid?</span>
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default ErrorUi
