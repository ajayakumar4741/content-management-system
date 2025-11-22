import React from 'react'

function Modal({children}) {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm">
      {children}
    </div>
  )
}

export default Modal
