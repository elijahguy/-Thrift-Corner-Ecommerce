import {  ShoppingCartOutlined, SearchOutlinedIcon , FavoriteBorderOutlined, } from "@mui/icons-material"
import styled  from "styled-components"

const Container = styled.div`
     flex:1;
     margin: 5px;
`;

const Circle= styled.div``
const Image= styled.Img``
const Info= styled.div``
const Icon= styled.div``




const Product = ({item}) => {
    return (
          <Container>
               <Circle/>
               <Image src={item.img}/>
               <Info>
                   <Icon>
                       <ShoppingCartOutlined/>
                   </Icon>
                   <Icon>
                       <SearchOutlinedIcon/>
                   </Icon>
                   <Icon>
                       <FavoriteBorderOutlined/>
                   </Icon>
               </Info>
          </Container>
  )
}

export default Product