import { VFC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { TaskListMemo } from './TaskList'
import { TaskEditMemo } from './TaskEdit'

export const MainTask: VFC = () => {
  const history = useHistory()
  const [text, setText] = useState('') //実験用
  console.log('rendered MainTask')

  return (
    <>
      <input
        className="px-3 py-2 mb-3 border border-gray-300"
        placeholder="dummy text ?"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <p className="mb-10 text-xl font-bold">Tasks</p>
      <div className="grid grid-cols-2 gap-40">
        <TaskListMemo />
        <TaskEditMemo />
      </div>
      <ChevronDoubleRightIcon
        onClick={() => history.push('/tags')}
        className="w-5 h-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p>Tag page</p>
    </>
  )
}
