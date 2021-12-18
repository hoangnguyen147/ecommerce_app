import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { createRef } from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { ref } from 'yup';
import SearchIcon from '../../library/icons/SearchIcon'
import { SearchIconWrapper, SearchInput, SearchInputFake, SearchWrapper } from './Search.styles';

const Search = ({ value, setValue }) => {
    const [searchField, setSearchField] = useState("");
    const inputRef = useRef();

    useEffect(() => {
        console.log(inputRef)
        inputRef.current.focus();
    }, [])
    return (
        <TouchableOpacity onPress={() => console.log("touch")}>
            <SearchWrapper>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <SearchInput value={value} onChangeText={(text) => {
                    setValue(text);
                    console.log(text)
                }} ref={inputRef} autoFocus={true} placeholder="Tìm kiếm sản phẩm" onFocus={() => console.log("focus")} />
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
