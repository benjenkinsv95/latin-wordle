import { useState } from 'react'
import {
  loadGameOffsetFromLocalStorage,
  saveGameOffsetToLocalStorage,
} from '../../lib/localStorage'
import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  const [offset, setOffset] = useState(loadGameOffsetFromLocalStorage())

  const handleOffsetChange = (e: any) => {
    const newOffset = +e.target.value || 0
    setOffset(newOffset)
    saveGameOffsetToLocalStorage(newOffset)
  }
  const handleLoadClick = () => {
    document.location.reload()
  }
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Guess the WORDLE in 6 tries. After each guess, the color of the tiles
        will change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" status="correct" />
        <Cell value="A" />
        <Cell value="N" />
        <Cell value="I" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500">
        The letter C is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="M" />
        <Cell value="A" />
        <Cell value="R" status="present" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500">
        The letter R is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="U" status="absent" />
        <Cell value="E" />
        <Cell value="R" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500">
        The letter U is not in the word in any spot.
      </p>
      <label className="text-gray-500">Game Offset</label>
      <br />
      <input
        type="number"
        placeholder="offset"
        value={offset}
        onChange={handleOffsetChange}
      />
      <br />
      <button className="text-gray-500" onClick={handleLoadClick}>
        Load
      </button>
    </BaseModal>
  )
}
