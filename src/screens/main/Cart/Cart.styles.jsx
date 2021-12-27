import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const MainCart = styled(View)`
    padding-top: 15px;
    flex: 1;
`

export const CartItemWrapper = styled(View)`
    margin: 10px auto;
    margin-bottom: 20px;
    /* background-color: blue; */
    padding: 5px;
    flex-direction: row;
    align-items: center;
`
export const CartToolsWrapper = styled(View)`
    padding: 4px 0;
    flex-direction: row;
    justify-content: space-between;
`

export const QuantityWrapper = styled(View)`
    flex-direction: row;
`

export const ToolsWrapper = styled(TouchableOpacity)`
    border: 1px solid #888;
    border-radius: 5px;
    border-color: ${props => props.disabled ? "#ccc" : "#000"};
`

export const Quantity = styled(Text)`
    padding: 0 18px;
`

export const CartFooter = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex: 0.08;
    padding: 0 12px;
    /* background-color: #f7f7f7; */
`

export const SumText = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading2};
`

export const CheckoutButton = styled(Text)`
    background-color: ${props => props.theme.colors.primary};
    border-radius: 15px;
    color: white;
    padding: 5px 8px;
`

export const CheckoutItemWrapper = styled(View)`
    margin: 8px auto;
    padding: 5px;
    flex-direction: row;
    align-items: center;
`

export const HorizontalLine = styled(View)`
    border-bottom-color: #000;
    border-bottom-width: 1px;
`



