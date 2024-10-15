import { useState } from 'react'
import CheckedIcon from '../../../assets/images/checkbox/checked.svg'
import UnCheckedIcon from '../../../assets/images/checkbox/unCheck.svg'

const PageCheckBox = () => {
  const [checked, setChecked] = useState(true)

  // Handle the checkbox toggle
  const toggleCheckbox = () => setChecked(!checked)

  return (
    <label className="flex items-center cursor-pointer">
      <input type="checkbox" checked={checked} onChange={toggleCheckbox} className="hidden" />
      <span className="w-6 h-6 flex items-center justify-center">
        {checked ? (
          <img src={CheckedIcon} alt="Checked" className="w-4 h-4" />
        ) : (
          <img src={UnCheckedIcon} alt="Unchecked" className="w-4 h-4" />
        )}
      </span>
    </label>
  )
}

export default PageCheckBox
