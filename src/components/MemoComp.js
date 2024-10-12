import React from 'react'

const MemoComp = ({name}) => {
  return (
    <div>
        <h1>Use Memo : {name}</h1>
    </div>
  )
}

export default React.memo(MemoComp)