import * as Styles from './styles'


const SvgIcon = (props) => {
  return (
    <Styles.SvgIcon {...props}>
      {props.children}
    </Styles.SvgIcon>
  )
}

export default SvgIcon
