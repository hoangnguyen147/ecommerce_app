import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableHighlight, Pressable, TouchableOpacity } from 'react-native'
import OverviewImage from './component/OverviewImage'
import ReviewProduct from './component/ReviewProduct'
import AnotherProduct from './component/AnotherProduct';
import Modal from "react-native-modal";
import XCircle from '../../../../../library/icons/XCircle';
import Stars from 'react-native-stars';
import StarFilled from '../../../../../library/icons/StarFilled';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getComments, postAddComment } from '../../../../../api/comment.api';



const Overview = ({ images, name, productId }) => {
  const imageData = [images, images, images, images];
  const [isModalRating, setIsModalRating] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const useComment = [commentInput, setCommentInput];

  const [comments, setComments] = useState("");

  const getCommentOfProduct = async (id) => {
    try {
      const res = await getComments(id);
      setComments(res.data)
    } catch (err) {

    }
  }

  useEffect(() => {
    getCommentOfProduct(productId);
  }, []);

  return (
    <View style={styles.overview_wrapper}>
      <OverviewImage data={imageData} />
      <ReviewProduct
        setIsModalRating={setIsModalRating}
        useComment={useComment}
        productId={productId}
        data={comments}
      />
      <AnotherProduct />
      <ModalRating
        modalVisible={isModalRating}
        setModalVisible={setIsModalRating}
        name={name} comment={commentInput}
        setComment={setCommentInput}
        productId={productId}
        fetchData={() => getCommentOfProduct(productId)}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  overview_wrapper: {
    marginHorizontal: 10,
  },
  add_card: {
    backgroundColor: '#2ecc71',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
  },
  modal: {
    flex: 0.5,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: "space-around",
    paddingVertical: 10,
    borderRadius: 25,
  },
  btn_submit: {
    // padding: "10 20",
    width: 100,
    paddingVertical: 10,
    textAlign: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
    color: 'white',
    marginHorizontal: 5
  },
  btn_close: {
    // padding: "10 20",
    // paddingHorizontal: 20,
    paddingVertical: 10,
    width: 100,
    textAlign: 'center',
    backgroundColor: 'gray',
    borderRadius: 10,
    color: 'white',
    marginHorizontal: 5
  },
  btn_wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    // textShadowOffset: { width: 10, height: 10 },
    textShadowRadius: 2,
    fontSize: 40,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  invite_vote: {
    paddingHorizontal: 15
  },
  product_name: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontWeight: "bold"
  }

})
export default Overview;

const ModalRating = ({ modalVisible, setModalVisible, name, comment, setComment, productId, fetchData }) => {

  const [vote, setVote] = useState(0);

  const handleVote = async () => {
    try {
      const res = await postAddComment({
        content: comment,
        product_id: productId,
        vote: vote
      });
      console.log(res);
      fetchData();
    } catch (err) {
      console.error(err)
    }
    setModalVisible(false);
    setComment("");
  };
  return (
    <Modal
      isVisible={modalVisible}
      setModalVisible={setModalVisible}
      backdropColor={"#262626"}
      onBackButtonPress={() => setModalVisible(false)}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionOutTiming={1000}
    // animationIn={"bounce"}
    >
      <View style={styles.modal}>
        <View>
          <Text style={styles.invite_vote}>{comment}</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Stars
            half={true}
            default={5}
            update={(value) => {
              setVote(value);
            }}
            spacing={4}
            starSize={40}
            count={5}
            fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
            emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]} />}
            halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}
          />
        </View>
        <View style={styles.btn_wrapper}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.btn_close}>Hủy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleVote()}>
            <Text style={styles.btn_submit}>Đánh giá</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )


}
