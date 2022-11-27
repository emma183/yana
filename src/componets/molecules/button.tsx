import { ButtonContainer, Text } from "../atoms"

interface ButtonProps {
    onPress?: () => void;
    bgColor?: string;
    children?: any;
    textSize?: string;
    textWeight?: string;
    textColor?: string;
    borderRadius?: string;
    width?: string;
    height?: string;
}

const Button =(props: ButtonProps) => {
    return (
        <ButtonContainer
            onPress={props.onPress}
            bgColor={props.bgColor}
            borderRadius={props.borderRadius}
            width={props.width}
            height={props.height}
            >
            <Text 
                size={props.textSize} 
                weight={props.textWeight} 
                color={props.textColor}>
                    {props.children}
            </Text>
        </ButtonContainer>
    )
}

export default Button;