import React from 'react'
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import SearchIcon from '../../library/icons/SearchIcon'
import { SearchIconWrapper, SearchInput, SearchInputFake, SearchWrapper } from './Search.styles'

const Search = () => {
    return (
        <TouchableOpacity onPress={() => console.log("touch")}>
            <SearchWrapper>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <SearchInput autoFocus={true} placeholder="Tìm kiếm sản phẩm" onFocus={() => console.log("focus")} />
            </SearchWrapper>
        </TouchableOpacity>
    )
}

export default Search

export const SearchFake = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <SearchWrapper>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <SearchInputFake onFocus={() => console.log("focus fake")}>Tìm kiếm sản phẩm</SearchInputFake>
            </SearchWrapper>
        </TouchableOpacity>
    )
}
