import {MaterialComponent} from '@preact-material-components/base/lib/MaterialComponent';
import {h} from 'preact';

export interface IIconProps {}

export interface IIconState {}

export class Icon<PropsType = {}, StateType = {}> extends MaterialComponent<
  IIconProps & PropsType,
  IIconState & StateType
> {
  protected componentName = 'icon';
  protected mdcProps: string[] = [];

  protected materialDom(props) {
    const classes = ['material-icons'];
    // CardActionIcon sends className
    if (props.className) {
      classes.push(props.className);
    }
    return (
      <i {...props} className={classes.join(' ')}>
        {props.children}
      </i>
    );
  }
}

export default Icon;
