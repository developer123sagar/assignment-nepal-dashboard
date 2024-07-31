import * as React from 'react'
import { createEditor } from '@editablejs/models'
import { EditableProvider, ContentEditable, withEditable } from '@editablejs/editor'

const TextEditor = () => {

  const editor = React.useMemo(() => withEditable(createEditor()), [])

  return (
  <EditableProvider editor={editor}>
    <ContentEditable placeholder="Please enter content..." />
  </EditableProvider>)
}

export default TextEditor;