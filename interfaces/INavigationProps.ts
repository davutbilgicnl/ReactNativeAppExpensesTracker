import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';

/**
 * Interface for the navigation props.
 * @interface INavigationProps
 * @property {NavigationProp<ParamListBase>} navigation - The navigation prop
 * @property {RouteProp<ParamListBase, string>} route - The route prop
 * @example
 * interface IExampleComponentProps extends INavigationProps {}
 *
 */
export interface INavigationProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, string>;
}
