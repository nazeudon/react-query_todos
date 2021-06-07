import { VFC, memo, FormEvent } from 'react'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setEditedTag, selectTag } from '../slices/todoSlice'
import { useMutateTag } from '../hooks/useMutateTag'

const TagEdit: VFC = () => {
  const editedTag = useAppSelector(selectTag)
  const dispatch = useAppDispatch()
  const { createTagMutation, updateTagMutation } = useMutateTag()
  console.log('rendered TaskEdit')

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (editedTag.id === 0) createTagMutation.mutate(editedTag)
    else {
      updateTagMutation.mutate(editedTag)
    }
  }

  if (updateTagMutation.isLoading) {
    return <span>Updating...</span>
  }
  if (createTagMutation.isLoading) {
    return <span>Creating...</span>
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className="px-3 py-2 mb-3 border border-gray-300"
          placeholder="new tag ?"
          type="text"
          onChange={(e) =>
            dispatch(setEditedTag({ ...editedTag, name: e.target.value }))
          }
          value={editedTag.name}
        />
        <button
          className="px-3 py-2 mx-3 my-3 text-white bg-indigo-600 rounded disabled:opacity-40 hover:bg-indigo-700"
          disabled={!editedTag.name}
        >
          {editedTag.id === 0 ? 'Create' : 'Update'}
        </button>
      </form>
    </div>
  )
}
export const TagEditMemo = memo(TagEdit)
