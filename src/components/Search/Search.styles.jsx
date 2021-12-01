import { Text, TextInput, View } from "react-native"
import styled from "styled-components"

export const SearchInput = styled(TextInput)`
    padding: 8px;
    padding-left: 45px;
    width: 90%;
    border: 2px solid #ddd;
    border-radius: 14px;
`

export const SearchInputFake = styled(Text)`
    padding: 15px;
    padding-bottom: 12px;
    padding-left: 45px;
    width: 90%;
    border: 2px solid #ddd;
    border-radius: 14px;
    color: #aaa;
`

export const SearchWrapper = styled(View)`
    position: relative;
    flex-direction: row;
    margin: 14px auto;
`

export const SearchIconWrapper = styled(View)`
    position: absolute;
    padding: 14px;
`