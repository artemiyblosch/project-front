import { FCProps } from "@/lib/FCProps";

type FlexJustify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around';
type FlexAlign = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
type FlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';

type FlexProps = FCProps & {
  justifyContent ?: FlexJustify;
  align ?: FlexAlign;
  direction ?: FlexDirection;
}

function defaulted(value ?: any) { // eslint-disable-line
  return (value == null ? 'unset' : value);
}

export const Flex : React.FC<FlexProps> = ({
  children, 
  className, 
  justifyContent, 
  align, 
  direction
  }) => {
    return ( 
    <div className={className} style={{
      justifyContent: defaulted(justifyContent),
      alignItems: defaulted(align),
      flexDirection: defaulted(direction)
    }}>
      {children}
    </div> )
}