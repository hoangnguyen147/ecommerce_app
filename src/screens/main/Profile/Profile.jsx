import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import { getMe } from '../../../api/auth';
import Header3 from '../../../components/Header/Header3';
import SafeArea from '../../../components/utils/SafeArea';
import { logout } from '../../../redux/actions/user';
import { AvatarImage, EmailWrapper, HorizontalLine, InfoContent, InfoTitle, IntroArea, MainProfile, NameAndEmail, NameWrapper, InfoWrapper } from './Profile.styles';

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const { width, height } = useWindowDimensions();


  const getProfile = async () => {
    const res = await getMe();
    console.log(res.data);

    setData(res.data)
  }

  useEffect(() => {
    getProfile();
  }, [])

  return (
    <SafeArea>
      <Header3 navigation={navigation} />
      <MainProfile>
        <IntroArea>
          <AvatarImage source={{ uri: "https://hoangnguyen147.sgp1.digitaloceanspaces.com/images/doanky5/default2.png" }} />
          <NameAndEmail>
            <NameWrapper>{data.fullname}</NameWrapper>
            <EmailWrapper>{data.email}</EmailWrapper>
          </NameAndEmail>
        </IntroArea>

        <HorizontalLine />

        <InfoWrapper>
          <InfoTitle>Tên đăng nhập</InfoTitle>
          <InfoContent>{data.username}</InfoContent>
        </InfoWrapper>

        <HorizontalLine />

        <InfoWrapper>
          <InfoTitle>Địa chỉ</InfoTitle>
          <InfoContent>{data.address}</InfoContent>
        </InfoWrapper>

        <HorizontalLine />

        <InfoWrapper>
          <InfoTitle>Số điện thoại</InfoTitle>
          <InfoContent>{data.phone}</InfoContent>
        </InfoWrapper>

        <HorizontalLine />

        <TouchableOpacity onPress={() => dispatch(logout())}>
          <InfoWrapper>
            <InfoTitle>Cập nhật</InfoTitle>
          </InfoWrapper>
        </TouchableOpacity>

        <HorizontalLine />

        <TouchableOpacity onPress={() => dispatch(logout())}>
          <InfoWrapper>
            <InfoTitle>Đăng xuất</InfoTitle>
          </InfoWrapper>
        </TouchableOpacity>

        <HorizontalLine />

      </MainProfile>
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  info_wrapper: {

  },
  info_title: {

  }
})

export default Profile;
