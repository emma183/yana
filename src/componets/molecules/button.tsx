import { ButtonContainer, Text } from "../atoms"

interface ButtonProps {
    onPress?: () => void;
    children?: any;
    styles?: any;
}

const Button =(props: ButtonProps) => {
    return (
        <ButtonContainer
            onPress={props.onPress}
            bgColor={props.styles.backGroundColor}
            borderRadius={props.styles.borderRadius}
            width={props.styles.width}
            height={props.styles.height}
            marginTop={props.styles.marginTop}
            marginBottom={props.styles.marginBottom}
            marginLeft={props.styles.marginLeft}
            marginRight={props.styles.marginRight}
            >
            <Text 
                size={props.styles.fontSize} 
                weight={props.styles.fontWeight} 
                color={props.styles.textColor}>
                    {props.children}
            </Text>
        </ButtonContainer>
    )
}

export default Button;