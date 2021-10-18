import * as Styles from './styles'


const CommonInput = (props) => {
  return (
    <Styles.Label>
      {props.label}
      <Styles.Input error={props.error} name={props.name} placeholder={props.placeholder} {...props} />
    </Styles.Label>
  )
}

export default CommonInput
