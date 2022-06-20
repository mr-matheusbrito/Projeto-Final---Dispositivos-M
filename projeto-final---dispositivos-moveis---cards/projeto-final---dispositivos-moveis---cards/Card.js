import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, Button} from 'react-native'

export default class Card extends React.PureComponent {
  render() {
    return(
      <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source={{uri:'https://www.mcicon.com/wp-content/uploads/2021/01/Transport_Car_1-copy-36.jpg'}}/>
        <Text style={styles.cardText}>-Serviços: Troca de oleo, Balancemento, Pintura, Troca de Penel</Text>
        <Button
        title="Carros"
        />

        <Image style={styles.cardImage} source={{uri:'https://png.pngtree.com/png-vector/20190331/ourmid/pngtree-motorcycle-icon-solid--vehicle-and-transportation-icon-stock-png-image_876628.jpg'}}/>
        <Text style={styles.cardText}>-Serviços: Troca de oleo, Balancemento, Pintura, Troca de Penel</Text>
        <Button
        title="Moto"
        />

           <Image style={styles.cardImage} source={{uri:'https://cdn.dribbble.com/users/230073/screenshots/4614905/icons-reinforcements-v2_still_2x.gif?compress=1&resize=400x300&vertical=top'}}/>
        <Text style={styles.cardText}>-Serviços: Balancemento, Pintura, Troca de Penel</Text>
        <Button
        title="Bicicletas"
        />

        <Image style={styles.cardImage} source={{uri:'https://static.vecteezy.com/ti/vetor-gratis/p1/3706746-set-technology-icon-linear-style-wheel-cog-mechanical-vector-sign-isolated-on-white-background-free-vector-gr%C3%A1tis-vetor.jpg'}}/>
        <Text style={styles.cardText}>Serviços Diversos</Text>
        <Button
        title="Serviços Diversos"
        />
        


      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius:1,
    textShadowOffset:{
      width:3,
      height:3,
    }
  },
  cardImage:{
    width:'100%',
    height: 200,
    resizeMode: 'cover'
  },
    cardText:{
      padding:10,
      fontSize:16,
      textAlign: 'center'
    }
})