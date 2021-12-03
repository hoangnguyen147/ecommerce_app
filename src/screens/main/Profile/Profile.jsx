import React from 'react'
import { View, Text } from 'react-native'
import Header3 from '../../../components/Header/Header3';
import SafeArea from '../../../components/utils/SafeArea';
import { AvatarImage, EmailWrapper, HorizontalLine, IntroArea, MainProfile, NameAndEmail, NameWrapper } from './Profile.styles';

const Profile = ({ navigation }) => {
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
      </MainProfile>
    </SafeArea>
  )
}

export default Profile;
