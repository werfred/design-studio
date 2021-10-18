import {useField} from 'formik'

import * as Styles from './styles'


const TextAreaInput = (props) => {
  const [field, meta] = useField(props)
  return (
    <>
      <Styles.Label>
        {props.label}
        <Styles.TextArea
          rows={6}
          {...field}
          placeholder={props.placeholder}
          error={props.error}
          {...props}
        />
      </Styles.Label>
    </>
  )
}

export default TextAreaInput
