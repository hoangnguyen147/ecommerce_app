import React from 'react';
import { Button, Text } from 'react-native';
import { connect } from 'react-redux';
import SafeArea from '../../components/utils/SafeArea';
import { login, logout } from '../../redux/actions/user';


function Home({ ...props }) {
    return (
        <SafeArea>
            <Text>Home Screen</Text>
            <Button title="Đăng xuất" onPress={() => props.logout()} />
        </SafeArea>
    );
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    logout
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);