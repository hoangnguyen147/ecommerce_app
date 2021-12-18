import React from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch } from 'react-redux';
import Header3 from '../../../components/Header/Header3';
import SafeArea from '../../../components/utils/SafeArea';
import { logout } from '../../../redux/actions/user';
import { AvatarImage, EmailWrapper, HorizontalLine, IntroArea, MainProfile, NameAndEmail, NameWrapper } from './Profile.styles';

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <SafeArea>
      <Header3 navigation={navigation} />
      <MainProfile>
        <IntroArea>
          <AvatarImage source={require("../../../../assets/images/avar.jpg")} />
          <NameAndEmail>
            <NameWrapper>Nguyễn Huy Hoàng</NameWrapper>
            <EmailWrapper>huyhoangnguyen147z@gmail.com</EmailWrapper>
          </NameAndEmail>
        </IntroArea>
        <HorizontalLine />
        <Button onPress={() => dispatch(logout())} title='Đăng xuất' />
      </MainProfile>
    </SafeArea>
  )
}

export default Profile;
