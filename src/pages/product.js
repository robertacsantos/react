
import React from 'react';
import {WebView} from 'react-native-webview';


// class Product extends Component {
//   render() {
//     return (
//       <WebView
//         source={{ uri: 'navigation.state.params.product.url' }}
//         style={{marginTop: 20}}
//       />
//       );
//   }
// }

// Product.navigationOptions = ({ navigation }) => ({
//     title: navigation.state.params.product.title
// });

const Product = ({ navigation }) => (
    <WebView
    source={{ uri: navigation.state.params.product.url }}
    style={{marginTop: 20}}
    />
);

  
  Product.navigationOptions = ({ navigation }) => ({
      title: navigation.state.params.product.title
  });
  
export default Product;